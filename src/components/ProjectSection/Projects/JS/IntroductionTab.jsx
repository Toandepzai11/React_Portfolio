import React, {Fragment} from "react";
import {Grid} from "@mui/material";
import Alert from "@mui/material/Alert";
import { IoBriefcase } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import {VscStarFull} from "react-icons/vsc";

const IntroductionTab = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <h1>Introduction</h1>
          <p>
            A list of all capstone, personal and hackathon projects. Please
            select any tabs from the left to view details of each. And each
            projects also included with a Github link to dive deeper into the
            project.
          </p>

          <h4>
            {" "}
            <VscStarFull />
            &nbsp;Remarkable Projects
          </h4>
          <ol>
            <li>BProtective</li>
            <li>Pay@Ease (COVID-19 Hackathon)</li>
          </ol>

          <h4>
            {" "}
            <FaBook />
            &nbsp;Learner Projects
          </h4>
          <ol>
            <li>Data Structures and Algorithms</li>
            <li>iOS Mini Projects</li>
          </ol>

          <h4>
            {" "}
            <IoBriefcase />
            &nbsp;Work Projects
          </h4>
          <Alert sx={{ fontSize: 12 }} variant="outlined" severity="info">
            <i>
              These projects are to display my experiences and technology stacks
              that I used. No confidential information is being displayed nor
              any code are being shown!
            </i>
          </Alert>
          <ol>
            <li>Pager Schedule @ CGI</li>
            <li>File System @ CGI</li>
          </ol>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Fragment>
  );
};

export default IntroductionTab;
