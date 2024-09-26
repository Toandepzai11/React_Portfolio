import React, { Fragment } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import classes from "../CSS/SchoolList.module.css";
const SchoolList = (props) => {
  const schools = props.schools;
  const SchoolTimeline = schools.map((school, index) => (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
        className={classes.schoolTimeline}
      >
        <h3>{school.school}</h3>
        <br></br>
        <Typography variant="h5" component="span">
          {school.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={{
            backgroundColor: "white",
            width: "60px",
            height: "60px",
          }}
        >
          <img
            src={school.logo}
            className={classes.iconPlacement}
            alt={school.id}
          />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <h4>{school.title}</h4>
        <ul>
          {school.desc.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <Fragment>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.4,
          },
        }}
        className={classes.workExperienceItem}
      >
        {SchoolTimeline}
      </Timeline>
    </Fragment>
  );
};

export default SchoolList;
