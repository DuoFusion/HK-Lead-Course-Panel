import { Fragment } from "react";
import Breadcrumbs from "../../coreComponents/Breadcrumbs";

const DashboardContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Dashboard" parent="Pages" />
    </Fragment>
  );
};

export default DashboardContainer;
