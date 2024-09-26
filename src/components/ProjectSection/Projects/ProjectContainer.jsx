import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Divider from "@mui/material/Divider";

import classes from "./CSS/ProjectContainer.module.css";
import contentClasses from "./CSS/ProjectContent.module.css";
import projects from "../../../assets/data/ProjectsData.jsx";
import IntroductionTab from "./JS/IntroductionTab.jsx";

import Project from "./JS/Project";

export default function ProjectsContainer() {
  const [value, setValue] = React.useState("intro");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabs = projects.map((project, index) => (
    <Tab key={project.id} label={project.title} value={project.id} />
  ));
  const tabs_content = projects.map((project, index) => (
    <TabPanel value={project.id} key={index}>
      <Project project={project} />
    </TabPanel>
  ));

  return (
    <React.Fragment>
      <Box
        id="projects_tab"
        sx={{ width: "100%", typography: "body1" }}
        className={classes.projectContainer}
        style={{background: "#eef",color:"black"}}
      >
        <TabContext value={value}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={2} md={2}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  textAlign: "center",
                }}
              >
                <TabList
                  onChange={handleChange}
                  centered
                  orientation="vertical"
                  className={classes.sideBar}
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab value="intro" label="Instructions" />
                  {tabs}
                </TabList>
              </Box>
              <Divider orientation="vertical" flexItem />
            </Grid>

            <Grid item xs={12} sm={10} md={10} className={contentClasses.contents}>
              <TabPanel value="intro">
                <IntroductionTab />
              </TabPanel>
              {tabs_content}
            </Grid>
          </Grid>
        </TabContext>
      </Box>
    </React.Fragment>
  );
}
