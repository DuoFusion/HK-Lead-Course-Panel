import { Fragment } from "react";
import { Breadcrumbs } from "../../coreComponents";
import AboutContainer from "./About";
import TermsConditionContainer from "./TermsCondition";
import PrivacyPolicyContainer from "./PrivacyPolicy";

const DocumentContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Document" parent="Pages" />
      <AboutContainer />
      <PrivacyPolicyContainer />
      <TermsConditionContainer />
    </Fragment>
  );
};

export default DocumentContainer;
