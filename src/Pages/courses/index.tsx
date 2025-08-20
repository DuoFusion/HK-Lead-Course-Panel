import { Button, Flex, Image, Modal, Switch, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { Edit, Forbidden, Trash } from "iconsax-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { Mutations, Queries } from "../../api";
import { ROUTES } from "../../constants";
import { Breadcrumbs, CardWrapper } from "../../coreComponents";
import { FormatDate, FormatTime } from "../../utils/DateFormatted";
import { useBasicTableFilterHelper } from "../../utils/hook";
import { ActiveStatus } from "../../data";
import { CoursesType } from "../../types";

const CoursesContainer = () => {
  const { pageNumber, pageSize, params, handleSetSearch, handlePaginationChange, handleSetSortBy } = useBasicTableFilterHelper({
    initialParams: { page: 1, limit: 10 },
    debounceDelay: 500,
    sortKey: "blockFilter",
  });

  const navigate = useNavigate();
  const { mutate: DeleteCourses } = Mutations.useDeleteCourses();
  const { mutate: HandleActive, isPending: isHandleActiveLoading } = Mutations.useCoursesHandleActive();

  const { data: Courses, isLoading: isCoursesLoading } = Queries.useGetCourses(params);
  const All_Courses = Courses?.data;

  const handleEdit = (item: CoursesType) => {
    navigate(ROUTES.COURSES.ADD_EDIT_COURSES, {
      state: {
        editData: item,
        edit: true,
      },
    });
  };

  const columns: ColumnsType<CoursesType> = [
    { title: "#", key: "index", width: 10, fixed: "left", render: (_, __, index) => (pageNumber - 1) * pageSize + index + 1 },
    { title: "Courses Id", dataIndex: "_id", key: "_id" },
    { title: "Courses Name", dataIndex: "title", key: "title" },
    { title: "duration", dataIndex: "duration", key: "duration" },
    { title: "price", dataIndex: "price", key: "price" },
    { title: "priority", dataIndex: "priority", key: "priority" },
    { title: "category", dataIndex: "category", key: "category" },
    { title: "status", dataIndex: "status", key: "status" },
    { title: "syllabus", dataIndex: "syllabus", key: "syllabus" },
    { title: "instructor Name", dataIndex: "instructorName", key: "instructorName" },
    {
      title: "instructor Image",
      dataIndex: "instructorImage",
      key: "instructorImage",
      render: (instructorImage: string) => (instructorImage ? <Image src={instructorImage} width={60} height={60} alt="qr" fallback="/placeholder.png" /> : "-"),
    },
    {
      title: "thumbnail Image",
      dataIndex: "thumbnailImage",
      key: "thumbnailImage",
      render: (thumbnailImage: string) => (thumbnailImage ? <Image src={thumbnailImage} width={60} height={60} alt="qr" fallback="/placeholder.png" /> : "-"),
    },
    {
      title: "Courses Image",
      dataIndex: "CoursesImage",
      key: "CoursesImage",
      render: (CoursesImage: string) => (CoursesImage ? <Image src={CoursesImage} width={60} height={60} alt="qr" fallback="/placeholder.png" /> : "-"),
    },
    {
      title: "features",
      dataIndex: "features",
      key: "features",
      render: (features: boolean, record: CoursesType) => <Switch checked={features} className="switch-xsm" onChange={(checked) => HandleActive({ courseId: record._id.toString(), features: checked })} />,
      fixed: "right",
      width: 90,
    },
    {
      title: "Option",
      key: "actionIcons",
      width: 120,
      fixed: "right",
      render: (_, record) => (
        <Flex gap="middle" justify="center">
          <Button
            type="text"
            title="Active/UnActive"
            className={`m-1 p-1 btn ${record?.isBlocked ? "btn-danger" : "btn-success"}`}
            onClick={() => {
              Modal.confirm({
                title: "Are you sure?",
                content: `Do you really want to ${record?.isBlocked ? "UnActive" : "Active"} "${record?.title}"?`,
                okText: "ok",
                cancelText: "Cancel",
                onOk: async () => {
                  await HandleActive({ courseId: record?._id, isBlocked: !record?.isBlocked });
                },
              });
            }}
          >
            <Forbidden className="action" />
          </Button>
          <Button type="text" onClick={() => handleEdit(record)} title="Edit" className="m-1 p-1 btn btn-primary">
            <Edit className="action" />
          </Button>
          <Button
            type="text"
            danger
            className="m-1 p-1 btn btn-danger"
            onClick={() => {
              Modal.confirm({
                title: "Are you sure?",
                content: `Do you really want to delete "${record?.title}"?`,
                okText: "Yes, Delete",
                cancelText: "Cancel",
                onOk: () => DeleteCourses(record?._id),
              });
            }}
            title="Delete"
          >
            <Trash className="action" />
          </Button>
        </Flex>
      ),
    },
  ];

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Courses" parent="Pages" />
      <Container fluid className="custom-table">
        <CardWrapper onSearch={(e) => handleSetSearch(e)} searchClassName="col-md-6 col-xl-8" typeFilterPlaceholder="Select Status" typeFilterOptions={ActiveStatus} onTypeFilterChange={handleSetSortBy} buttonLabel="Add Courses" onButtonClick={() => navigate(ROUTES.COURSES.ADD_EDIT_COURSES)}>
          <Table
            className="custom-table"
            dataSource={All_Courses?.course_data}
            columns={columns}
            rowKey={(record) => record._id}
            scroll={{ x: "max-content" }}
            loading={isCoursesLoading || isHandleActiveLoading}
            pagination={{
              current: pageNumber,
              pageSize: pageSize,
              total: All_Courses?.totalData,
              showSizeChanger: true,
              onChange: handlePaginationChange,
            }}
          />
        </CardWrapper>
      </Container>
    </Fragment>
  );
};

export default CoursesContainer;
