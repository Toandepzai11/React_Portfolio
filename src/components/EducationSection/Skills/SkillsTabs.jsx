import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";

import SkillsList from "./JS/SkillsList";
import FE_Skills from "../../../assets/data/FE_Skills_Data";
import BE_Skills from "../../../assets/data/BE_Skills_Data";
import OT_Skills from "../../../assets/data/OT_Skills_Data";

import classes from "./CSS/SkillsTab.module.css";
const SkillsTab = () => {
  return (
    <Fragment>
      <div>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={4}>
            <SkillsList skills={FE_Skills} title="Front End" category="FE" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <SkillsList skills={BE_Skills} title="Back End" category="BE" />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <SkillsList skills={OT_Skills} title="Others" category="OT" />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default SkillsTab;
