import React, { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import * as FontAwesome from "react-icons/fa";
import * as Ionicons from "react-icons/io5";
import * as SimpleIcons from "react-icons/si";
import * as DevIcons from "react-icons/di";
import classes from "../CSS/SkillList.module.css";

export default function SkillsList(props) {
  let avatarClass = "";

  if (props.category === "FE") {
    avatarClass =
      "background: linear-gradient(45deg, #c96881 0%,#f7b695 100%) !important";
  } else if (props.category === "BE") {
    avatarClass =
      "background: linear-gradient(45deg, #7b93eb 0%, #70f0f4 100%)!important;";
  } else if (props.category === "OT") {
    avatarClass =
      "background: linear-gradient(45deg, #32c873 0%, #8df2bf 100%) !important";
  }

  const Icon = (props) => {
    const { iconName, iconCat } = props;

    let tempIconHolder = FontAwesome[iconName];

    if (iconCat === "fa") {
      tempIconHolder = FontAwesome[iconName];
    } else if (iconCat === "io5") {
      tempIconHolder = Ionicons[iconName];
    } else if (iconCat === "si") {
      tempIconHolder = SimpleIcons[iconName];
    } else if (iconCat === "di") {
      tempIconHolder = DevIcons[iconName];
    } else {
      tempIconHolder = FontAwesome["FaBeer"];
    }
    let icon = React.createElement(tempIconHolder);

    return <div className={`${classes.iconSizing}`}>{icon}</div>;
  };
  const skillsList = props.skills.map((skill, index) => (
    <ListItem key={skill.id}>
      <ListItemAvatar>
        <Avatar className={classes.skillIcons}>
          <Icon iconName={skill.icon} iconCat={skill.iconCat} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText className={classes.skillsName} primary={skill.name} />
    </ListItem>
  ));

  return (
    <Fragment>
      <List sx={avatarClass} className={classes.skillSection}>
        <h3>{props.title}</h3>
        {skillsList}
      </List>
    </Fragment>
  );
}
