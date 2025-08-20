import { Button } from "antd";
import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import { Add, Minus } from "iconsax-react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Label, Row } from "reactstrap";
import { Mutations } from "../../api";
import { ImageUpload, SelectInput, TextInput } from "../../attribute/formFields";
import { ROUTES } from "../../constants";
import { Breadcrumbs, CardWrapper } from "../../coreComponents";
import { CoursesFormValues } from "../../types";
import { CoursesSchema } from "../../utils/ValidationSchemas";
import { DiscountStatus } from "../../data";

const AddEditCourses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const initialData = state?.editData;

  const { mutate: useCourses, isPending: isCoursesAdding } = Mutations.useCourses();
  const { mutate: upEditCourses, isPending: isCoursesUpdating } = Mutations.useEditCourses();

  const initialValues: CoursesFormValues = {
    title: initialData?.title || "",
    subtitle: initialData?.subtitle || "",
    background: initialData?.background || "",
    duration: initialData?.duration || "",
    skillLevel: initialData?.skillLevel || "",
    price: initialData?.price || "",
    totalLectures: initialData?.totalLectures || "",
    totalHours: initialData?.totalHours || "",
    priority: initialData?.priority || "",
    rating: initialData?.rating || "",
    whatYouLearn: initialData?.whatYouLearn || "",
    instructorName: initialData?.instructorName || "",
    courseLanguage: initialData?.courseLanguage || "",
    mrp: initialData?.mrp || "",
    discount: initialData?.discount || "",
    listOfLectureTitle: initialData?.listOfLectureTitle || "",
    shortDescription: initialData?.shortDescription || "",
    listOfLectureDescription: initialData?.listOfLectureDescription || "",
    instructorImage: initialData?.instructorImage ? [initialData.instructorImage] : [],
    courseImage: initialData?.courseImage ? [initialData.courseImage] : [],
    faq: initialData?.faq || [{ question: "", answer: "" }],
    features: initialData?.features || false,
  };

  const handleSubmit = async (values: CoursesFormValues, { resetForm }: FormikHelpers<CoursesFormValues>) => {
    const payload = {
      ...(values.title && { title: values.title }),
      ...(values.subtitle && { subtitle: values.subtitle }),
      ...(values.background && { background: values.background }),
      ...(values.duration && { duration: values.duration }),
      ...(values.skillLevel && { skillLevel: values.skillLevel }),
      ...(values.price && { price: values.price.toString() }),
      ...(values.totalLectures && { totalLectures: values.totalLectures }),
      ...(values.totalHours && { totalHours: values.totalHours }),
      ...(values.priority && { priority: values.priority }),
      ...(values.rating && { rating: values.rating }),
      ...(values.whatYouLearn && { whatYouLearn: values.whatYouLearn }),
      ...(values.instructorName && { instructorName: values.instructorName }),
      ...(values.courseLanguage && { courseLanguage: values.courseLanguage }),
      ...(values.mrp && { mrp: values.mrp }),
      ...(values.discount && { discount: values.discount }),
      ...(values.listOfLectureTitle && { listOfLectureTitle: values.listOfLectureTitle }),
      ...(values.shortDescription && { shortDescription: values.shortDescription }),
      ...(values.listOfLectureDescription && { listOfLectureDescription: values.listOfLectureDescription }),
      ...(values.instructorImage?.length && { instructorImage: values.instructorImage[0] }),
      ...(values.courseImage?.length && { courseImage: values.courseImage[0] }),
      ...(values.faq && { faq: values.faq }),
      ...(values.features !== undefined && { features: values.features }),
    };

    const onSuccessHandler = () => {
      resetForm();
      navigate(ROUTES.COURSES.COURSES);
    };
    console.log("payload", payload);

    if (state?.edit) {
      upEditCourses({ courseId: state?.editData?._id, ...payload }, { onSuccess: () => onSuccessHandler() });
    } else {
      useCourses(payload, { onSuccess: () => onSuccessHandler() });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle={`${state?.edit ? "Edit" : "Add"} Courses`} parent="Courses" />
      <Container fluid>
        <CardWrapper title={`${state?.edit ? "Edit" : "Add"} Courses`}>
          <div className="input-items">
            <Formik<CoursesFormValues> initialValues={initialValues} validationSchema={CoursesSchema} onSubmit={handleSubmit} enableReinitialize>
              {({ values }) => (
                <Form>
                  <Row className="gy-3">
                    <Col md="6" xl="4">
                      <TextInput name="title" label="Title" type="text" placeholder="Enter course title" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="subtitle" label="sub title" type="text" placeholder="Enter course sub title" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="background" label="Background" type="text" placeholder="Enter course Background" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="duration" label="Duration" type="text" placeholder="Enter duration" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="skillLevel" label="skill Level ===" type="text" placeholder="Enter skill Level" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="price" label="Price" type="number" placeholder="Enter price" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="totalLectures" label="Total Lectures" type="text" placeholder="Enter Total Lectures" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="totalHours" label="total Hours" type="text" placeholder="Enter total Hours" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="priority" label="Priority" type="number" placeholder="Enter priority" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="rating" label="rating" type="number" placeholder="Enter rating" required />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="whatYouLearn" label="what You Learn ====" type="text" placeholder="Enter what You Learn" />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="instructorName" label="Instructor Name" type="text" placeholder="Enter instructor name" />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="courseLanguage" label="course Language ====" type="text" placeholder="Enter course Language" />
                    </Col>
                    <Col md="6" xl="4">
                      <TextInput name="mrp" label="mrp" type="text" placeholder="Enter mrp" />
                    </Col>
                    <Col md="6" xl="4">
                      <SelectInput name="discount" label="discount" options={DiscountStatus} required />
                    </Col>
                    {/* <Col md="6" xl="4">
                      <TextInput name="listOfLectureTitle" label="list of Lecture Title" type="text" placeholder="Enter list of Lecture Title" />
                    </Col> */}
                    <Col md="12">
                      <TextInput name="shortDescription" label="Short Description" type="textarea" placeholder="Enter short description" required />
                    </Col>
                    {/* <Col md="12">
                      <TextInput name="listOfLectureDescription" label="List of Lecture Description" type="textarea" placeholder="Enter List of Lecture Description" />
                    </Col> */}
                    <Col md="2">
                      <ImageUpload name="instructorImage" label="Instructor Image" />
                    </Col>
                    <Col md="3">
                      <ImageUpload name="courseImage" label="Courses Image" required />
                    </Col>
                    {/* FAQ Section */}
                    <Col md="12" className="input-box">
                      <Label className="mb-3">Courses FAQ</Label>
                      <FieldArray name="faq">
                        {({ push, remove }) => (
                          <>
                            {values.faq.map((_, index) => (
                              <Row key={index} className="mb-3 gy-4">
                                <Col md="5">
                                  <TextInput name={`faq[${index}].question`} label={`FAQ Question ${index + 1}`} type="text" placeholder="Enter FAQ question" />
                                </Col>
                                <Col md="5">
                                  <TextInput name={`faq[${index}].answer`} label={`FAQ Answer ${index + 1}`} type="textarea" placeholder="Enter FAQ answer" />
                                </Col>
                                <Col md="2" className="d-flex align-items-center gap-2">
                                  {values.faq.length > 1 && (
                                    <Button type="text" onClick={() => remove(index)} danger className="m-1 p-1 action-btn btn-danger">
                                      <Minus className="action" />
                                    </Button>
                                  )}
                                  {index === values.faq.length - 1 && (
                                    <Button type="text" onClick={() => push({ question: "", answer: "" })} className="m-1 p-1 btn btn-primary action-btn">
                                      <Add className="action" />
                                    </Button>
                                  )}
                                </Col>
                              </Row>
                            ))}
                          </>
                        )}
                      </FieldArray>
                    </Col>
                    <Col md="12" className="input-box">
                      <Label className="mb-3">List of Lecture</Label>
                      <FieldArray name="faq">
                        {({ push, remove }) => (
                          <>
                            {values.faq.map((_, index) => (
                              <Row key={index} className="mb-3 gy-4">
                                <Col md="5">
                                  <TextInput name={`faq[${index}].question`} label={`Title ${index + 1}`} type="text" placeholder="Enter list of Lecture Title" />
                                </Col>
                                <Col md="5">
                                  <TextInput name={`faq[${index}].answer`} label={`Description ${index + 1}`} type="textarea" placeholder="Enter List of Lecture Description" />
                                </Col>
                                <Col md="2" className="d-flex align-items-center gap-2">
                                  {values.faq.length > 1 && (
                                    <Button type="text" onClick={() => remove(index)} danger className="m-1 p-1 action-btn btn-danger">
                                      <Minus className="action" />
                                    </Button>
                                  )}
                                  {index === values.faq.length - 1 && (
                                    <Button type="text" onClick={() => push({ question: "", answer: "" })} className="m-1 p-1 btn btn-primary action-btn">
                                      <Add className="action" />
                                    </Button>
                                  )}
                                </Col>
                              </Row>
                            ))}
                          </>
                        )}
                      </FieldArray>
                    </Col>
                    <Col sm="12">
                      <div className="text-center mt-1">
                        <Button htmlType="submit" type="primary" className="btn btn-primary" size="large" loading={isCoursesAdding || isCoursesUpdating}>
                          Save
                        </Button>
                        <Button htmlType="button" className="btn btn-light ms-3" size="large" onClick={() => navigate(ROUTES.COURSES.COURSES)}>
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

export default AddEditCourses;
