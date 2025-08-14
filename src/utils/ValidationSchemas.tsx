import * as Yup from "yup";
import { FieldOptions, FieldTypeMap } from "../types";

export const fieldSchema = <K extends keyof FieldTypeMap>(type: K, label: string = "Field", options?: FieldOptions<FieldTypeMap[K]>): FieldTypeMap[K] => {
  const { required = true, extraRules, minItems } = options || {};

  let schema: FieldTypeMap[K];

  switch (type) {
    case "string":
      schema = Yup.string() as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "number":
      schema = Yup.number().typeError(`${label} must be a number`) as FieldTypeMap[K];
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.nullable().notRequired() as FieldTypeMap[K]);
      break;

    case "array":
      schema = Yup.array() as FieldTypeMap[K];
      if (minItems && minItems > 0) {
        schema = (schema as Yup.ArraySchema<any[], Yup.AnyObject>).min(minItems, `${label} is required`) as FieldTypeMap[K];
      }
      schema = required ? (schema.required(`${label} is required`) as FieldTypeMap[K]) : (schema.notRequired() as FieldTypeMap[K]);
      break;

    default:
      throw new Error(`Unsupported field type: ${type}`);
  }

  return extraRules ? extraRules(schema) : schema;
}

// ************ Login ***********

export const LoginSchema = Yup.object({
  email: fieldSchema("string", "Email", { extraRules: (s) => s.email("Invalid email address") }),
  password: fieldSchema("string", "Password", { extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "Password must include at least one special character") }),
});

// ************ Change Password ***********

export const ChangePasswordSchema = Yup.object({
  password: fieldSchema("string", "New Password", { extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "New Password must include at least one special character") }),
  confirmPassword: fieldSchema("string", "Confirm Password", { extraRules: (s) => s.matches(/[!@#$%^&*()_+={}:;"'<>,.?/-]/, "Confirm Password must include at least one special character") }),
});

// ************ Category ***********

export const CategorySchema = Yup.object({
  name: fieldSchema("string", "Name"),
  priority: fieldSchema("string", "Priority"),
  // title: fieldSchema("string", "Priority", { required: false }),
});

// export const SettingSchema = Yup.object({
//   logoImage: fieldSchema("array", "Logo", { minItems: 1 }),
//   bannerImage: fieldSchema("array", "Banner image", { minItems: 1 }),
// });
