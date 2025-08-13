import { Fragment } from "react";
import Breadcrumbs from "../../coreComponents/Breadcrumbs";
import CardWrapper from "../../coreComponents/CardWrapper";
import { Container } from "reactstrap";
import { useBasicTableFilterHelper } from "../../utils/hook";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

const CategoryContainer = () => {
  const { pageNumber, pageSize, searchTerm, sortBy, params, handleSetSearch, handleSetSortBy, handlePaginationChange } = useBasicTableFilterHelper(
    // {
    // initialParams: { page: 1, limit: 10 },
    // debounceDelay: 300,
//   }
);
  const navigate = useNavigate();

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Category" parent="Pages" />
      <Container fluid className="custom-table">
        <CardWrapper Search={(e) => handleSetSearch(e)} searchClass="col-xl-10 col-md-9 col-sm-7" btnTitle="Add User" btnClick={() => navigate(ROUTES.CATEGORY.ADD_EDIT_CATEGORY)}>
          {/* <Table
            className="custom-table"
            dataSource={AllUser?.User_data}
            columns={columns}
            rowKey={(record) => record._id}
            scroll={{ x: "max-content" }}
            loading={isLoading}
            pagination={{
              current: pageNumber,
              pageSize: pageSize,
              total: AllUser?.totalData,
              showSizeChanger: true,
              onChange: handlePaginationChange,
            }}
          /> */}
        </CardWrapper>
      </Container>
    </Fragment>
  );
};

export default CategoryContainer;
