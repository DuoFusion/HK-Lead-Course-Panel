import { Button } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Mutations } from "../../api";
import { ImageUpload, QuillInput, TextInput } from "../../attribute/formFields";
import { ROUTES } from "../../constants";
import { Breadcrumbs, CardWrapper } from "../../coreComponents";
import { AnnouncementFormValues } from "../../types";
import { buildPayload } from "../../utils/FormHelpers";
import { AnnouncementSchema } from "../../utils/ValidationSchemas";

const AddEditAnnouncement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const initialData = state?.editData;

  const { mutate: useAnnouncement, isPending: isAnnouncementAdding } = Mutations.useAnnouncement();
  const { mutate: upEditAnnouncement, isPending: isAnnouncementUpdating } = Mutations.useEditAnnouncement();

  const initialValues: AnnouncementFormValues = {
    title: initialData?.title || "",
    subTitle: initialData?.subTitle || "",
    description: initialData?.description || "",
    image: initialData?.image ? [initialData.image] : [],
    thumbnail: initialData?.thumbnail ? [initialData.thumbnail] : [],
    priority: initialData?.priority || null,
  };

  const handleNavigate = () => navigate(ROUTES.ANNOUNCEMENT.ANNOUNCEMENT);

  const handleSubmit = async (values: AnnouncementFormValues, { resetForm }: FormikHelpers<AnnouncementFormValues>) => {
    const payload = buildPayload(values, initialData);

    const onSuccessHandler = () => {
      resetForm();
      handleNavigate();
    };

    if (state?.edit) {
      upEditAnnouncement({ blogId: initialData?._id, ...payload }, { onSuccess: () => onSuccessHandler() });
    } else {
      useAnnouncement(payload, { onSuccess: () => onSuccessHandler() });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle={`${state?.edit ? "Edit" : "Add"} Announcement`} parent="Announcement" />
      <Container fluid>
        <CardWrapper title={`${state?.edit ? "Edit" : "Add"} Announcement`}>
          <div className="input-items">
            <Formik<AnnouncementFormValues> initialValues={initialValues} validationSchema={AnnouncementSchema} onSubmit={handleSubmit} enableReinitialize>
              {() => (
                <Form>
                  <Row className="gy-3">
                    <Col md="6">
                      <TextInput name="title" label="title" type="text" placeholder="Enter title" required />
                    </Col>
                    <Col md="6">
                      <TextInput name="subTitle" label="sub Title" type="text" placeholder="Enter sub Title" />
                    </Col>
                    <Col md="12">
                      <TextInput name="priority" label="Priority" type="number" placeholder="Enter priority" required />
                    </Col>
                    <Col md="12">
                      <QuillInput name="description" label="Description" required />
                    </Col>
                    <Col>
                      <ImageUpload name="image" label="Image" required />
                    </Col>
                    <Col>
                      <ImageUpload name="thumbnail" label="Thumbnail Image" required />
                    </Col>
                    <Col sm="12">
                      <div className="text-center mt-1">
                        <Button htmlType="submit" type="primary" className="btn btn-primary" size="large" loading={isAnnouncementAdding || isAnnouncementUpdating}>
                          Save
                        </Button>
                        <Button htmlType="button" className="btn btn-light ms-3" size="large" onClick={() => handleNavigate()}>
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

export default AddEditAnnouncement;
