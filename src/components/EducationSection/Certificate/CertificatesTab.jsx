import React, { Fragment } from "react";

import Certificate from "./JS/Certificate";
import CertificatesInfo from "../../../assets/data/Certificates_Data";

const CertificatesTab = () => {
  return (
    <Fragment>
      <Certificate certInfo={CertificatesInfo} />
    </Fragment>
  );
};

export default CertificatesTab;
