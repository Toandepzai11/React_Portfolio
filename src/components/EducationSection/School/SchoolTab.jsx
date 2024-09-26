import React, { Fragment } from "react";
import SchoolsPlatforms_Data from "../../../assets/data/SchoolsPlatforms_Data.jsx";

import SchoolList from "./JS/SchoolList.jsx";

const SchoolTabs = () => {
  return (
    <Fragment>
      <SchoolList schools={SchoolsPlatforms_Data} />
    </Fragment>
  );
};

export default SchoolTabs;
