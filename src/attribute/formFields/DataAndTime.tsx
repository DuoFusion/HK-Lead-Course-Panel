// import type { DatePickerProps, TimePickerProps } from "antd";
// import { DatePicker, TimePicker } from "antd";
// import dayjs, { Dayjs } from "dayjs";
// import { FieldHookConfig, useField } from "formik";
// import { FC } from "react";
// import { FormFeedback, Label } from "reactstrap";

// type PickerType = "time" | "date";

// interface DataAndTimeProps {
//   name: string;
//   label?: string;
//   type: PickerType;
//   required?: boolean;
//   placeholder?: string;
// }

// const DataAndTime: FC<DataAndTimeProps & FieldHookConfig<Dayjs | null>> = ({ name, label, type, required, validate, placeholder }) => {
//   const [field, meta, helpers] = useField<Dayjs | null>({ name, validate });

//   const handleChange: DatePickerProps["onChange"] | TimePickerProps["onChange"] = (value) => {
//     helpers.setValue(dayjs(value));
//   };

//   const commonProps = {
//     value: field.value || null,
//     onChange: handleChange,
//     status: meta.touched && meta.error ? ("error" as const) : undefined,
//     placeholder,
//   };

//   return (
//     <div className="input-box">
//       {label && (
//         <Label>
//           {label}
//           {required && <span className="required ps-1">*</span>}
//         </Label>
//       )}
//       {type === "time" ? <TimePicker {...commonProps} /> : <DatePicker {...commonProps} />}
//       {meta.touched && meta.error ? <FormFeedback style={{ display: "block" }}>{meta.error}</FormFeedback> : null}
//     </div>
//   );
// };

// export default DataAndTime;

import type { DatePickerProps, TimePickerProps } from "antd";
import { DatePicker, TimePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import { FieldHookConfig, useField } from "formik";
import { FC } from "react";
import { FormFeedback, Label } from "reactstrap";
import { DataAndTimeProps } from "../../types";

dayjs.extend(utc);

const DataAndTime: FC<DataAndTimeProps & FieldHookConfig<Date | null>> = ({ name, label, type, required, validate, ...rest }) => {
  const [field, meta, helpers] = useField<Date | null>({ name, validate });

  const handleChange: DatePickerProps<Dayjs>["onChange"] | TimePickerProps["onChange"] = (value) => {
    if (value) {
      helpers.setValue(value.utc().toDate());
    } else {
      helpers.setValue(null);
    }
  };

  const commonProps = {
    value: field.value ? dayjs(field.value) : null,
    onChange: handleChange,
    status: meta.touched && meta.error ? ("error" as const) : undefined,
    ...rest,
  };

  return (
    <div className="input-box">
      {label && (
        <Label>
          {label}
          {required && <span className="required ps-1">*</span>}
        </Label>
      )}
      {type === "time" ? <TimePicker {...commonProps} /> : <DatePicker {...commonProps} />}
      {meta.touched && meta.error ? <FormFeedback style={{ display: "block" }}>{meta.error}</FormFeedback> : null}
    </div>
  );
};

export default DataAndTime;
