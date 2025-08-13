import { Button } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { Mutations } from "../../api";
import Breadcrumbs from "../../coreComponents/Breadcrumbs";
import CardWrapper from "../../coreComponents/CardWrapper";
import { TextInput } from "../../shared/formFields";
// import { UserFormValues, UserPayload } from "../../types";
// import { UserSchema } from "../../utils/validationSchemas";
// import { ROUTES } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

export const UserInitialValues = {
  title: "",
  priority: "",
};

const AddEditCategory = () => {
  const navigate = useNavigate();
  // const { mutate: useUser, isPending: isUserCreating } = Mutations.useUser();
  // const { mutate: upEditUser, isPending: isUserUpdating } = Mutations.useEditUser();

  const location = useLocation();
  const state = location.state;

  const handleSubmit = async (values: any, { resetForm }: FormikHelpers<any>) => {
    const payload = {
      ...(values.title && { title: values.title }),
      ...(values.priority && { priority: values.priority }),
    };
    if (state?.edit) {
      // upEditUser({ userId: state?.editData?._id, ...payload });
      // navigate(ROUTES.USER);
    } else {
      // useUser(payload, {
      //   onSuccess: () => {
      //     resetForm();
      //     navigate(ROUTES.USER);
      //   },
      // });
    }
  };


  return (
    <Fragment>
      <Breadcrumbs mainTitle={`${state?.edit ? "Edit" : "Add"} Category`} parent="Category" />
      <Container fluid>
        <CardWrapper title={`${state?.edit ? "Edit" : "Add"} Category`}>
          <div className="input-items">
            <Formik<any> initialValues={UserInitialValues} validationSchema={{}} onSubmit={handleSubmit} enableReinitialize>
              {() => (
                <Form>
                  <Row className="gy-3">
                    <Col md="6">
                      <TextInput name="title" label="title" type="text" placeholder="Enter your Title" required />
                    </Col>
                    <Col md="6">
                      <TextInput name="priority" label="priority" type="number" placeholder="Enter your priority" required />
                    </Col>
                    <Col sm="12">
                      <div className="text-center mt-1">
                        <Button htmlType="submit" type="primary" className="btn btn-primary" size="large" >
                          Save
                        </Button>
                        <Button htmlType="button" className="btn btn-light ms-3" size="large" onClick={() => navigate(ROUTES.CATEGORY.CATEGORY)}>
                          Cancel
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </CardWrapper>
      </Container>
    </Fragment>
  );
};

export default AddEditCategory;
