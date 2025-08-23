import { Button } from "antd";
import { Form, Formik, FormikHelpers } from "formik";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Mutations, Queries } from "../../api";
import { SelectInput, TextInput } from "../../attribute/formFields";
import { ROUTES } from "../../constants";
import { Breadcrumbs, CardWrapper } from "../../coreComponents";
import { WorkshopFormValues } from "../../types";
import { generateOptions } from "../../utils";
import { buildPayload } from "../../utils/FormHelpers";
import { WorkshopSchema } from "../../utils/ValidationSchemas";

const AddEditWorkshopRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const initialData = state?.editData;

  const { mutate: useWorkshop, isPending: isWorkshopAdding } = Mutations.useWorkshop();
  const { mutate: upEditWorkshop, isPending: isWorkshopUpdating } = Mutations.useEditWorkshop();
  const { data: category, isLoading: isCategoryLoading } = Queries.useGetCategory({});

  const handleNavigate = () => navigate(ROUTES.WORKSHOP.WORKSHOP);

  const initialValues: WorkshopFormValues = {
    title: initialData?.title || "",
    shortDescription: initialData?.shortDescription || "",
    date: initialData?.date || "",
    time: initialData?.time || "",
    duration: initialData?.duration || "",
    instructorImage: initialData?.instructorImage ? [initialData.instructorImage] : [],
    instructorName: initialData?.instructorName || "",
    thumbnailImage: initialData?.thumbnailImage ? [initialData.thumbnailImage] : [],
    workshopImage: initialData?.workshopImage ? [initialData.workshopImage] : [],
    price: initialData?.price || null,
    categoryId: initialData?.categoryId?._id || "",
    status: initialData?.status || "",
    priority: initialData?.priority || null,
    fullDescription: initialData?.fullDescription || "",
    syllabus: initialData?.syllabus || "",
    faq: initialData?.faq || [{ question: "", answer: "" }],
    features: initialData?.features,
  };

  const handleSubmit = async (values: WorkshopFormValues, { resetForm }: FormikHelpers<WorkshopFormValues>) => {
    const payload = buildPayload(values, initialData);

    const onSuccessHandler = () => {
      resetForm();
      handleNavigate();
    };

    if (state?.edit) {
      upEditWorkshop({ workshopId: initialData?._id, ...payload }, { onSuccess: () => onSuccessHandler() });
    } else {
      useWorkshop(payload, { onSuccess: () => onSuccessHandler() });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle={`${state?.edit ? "Edit" : "Add"} Workshop`} parent="Workshop" />
      <Container fluid>
        <CardWrapper title={`${state?.edit ? "Edit" : "Add"} Workshop`}>
          <div className="input-items">
            <Formik<WorkshopFormValues> initialValues={initialValues} validationSchema={WorkshopSchema} onSubmit={handleSubmit} enableReinitialize>
              {() => (
                <Form>
                  <Row className="gy-3">
                    <Col md="6" xl="4">
                      <SelectInput name="categoryId" label="category" options={generateOptions(category?.data?.category_data)} loading={isCategoryLoading} />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="name" label="name" type="text" placeholder="Enter name" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="email" label="email" type="email" placeholder="Enter email" />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="phoneNumber" label="phone Number" type="number" placeholder="Enter phone Number" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="city" label="city" type="text" placeholder="Enter city" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="profession" label="profession" type="text" placeholder="Enter profession" />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="paymentStatus" label="paymentStatus" type="text" placeholder="Enter paymentStatus" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="fees" label="fees" type="text" placeholder="Enter fees" />
                    </Col>
                    <Col md="6" xl="4">
                      <SelectInput name="categoryId" label="category" options={generateOptions(category?.data?.category_data)} loading={isCategoryLoading} />
                    </Col>
                    <Col md="6">
                      <TextInput name="paymentMethod" label="paymentMethod" type="text" placeholder="Enter paymentMethod" />
                    </Col>
                    <Col md="6">
                      <TextInput name="transactionId" label="transactionId" type="text" placeholder="Enter transactionId" required />
                    </Col>
                    <Col sm="12">
                      <div className="text-center mt-1">
                        <Button htmlType="submit" type="primary" className="btn btn-primary" size="large" loading={isWorkshopAdding || isWorkshopUpdating}>
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

export default AddEditWorkshopRegister;
