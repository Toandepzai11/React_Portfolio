import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import classes from "../CSS/EducationTabs.module.css";
import SkillsTab from "../../Skills/SkillsTabs";
import SchoolTabs from "../../School/SchoolTab";
import CertificatesTab from "../../Certificate/CertificatesTab";

export default function TabTest() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{"background-color": "#eef"}} id="SkillsTab" sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            variant="fullWidth"
            centered
            className={classes.tabHeader}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Skills" value="1" />
            <Tab label="School & Platforms" value="2" />
            <Tab label="Certificates" value="3" />
          </TabList>
        </Box>
        <TabPanel className={classes.tabContent} value="1">
          <SkillsTab />
        </TabPanel>
        <TabPanel className={classes.tabContent} value="2">
          <SchoolTabs />
        </TabPanel>
        <TabPanel className={classes.tabContent} value="3">
          <CertificatesTab />
        </TabPanel> 
      </TabContext>
    </Box>
  );
}
