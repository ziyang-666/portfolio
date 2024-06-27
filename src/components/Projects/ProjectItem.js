import React from "react";

import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";

import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";

const ProjectItem = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  let description = props.project.description;
  if (description === "") {
    description = " project description";
  }
  if (description.length > 120) {
    description = description.substr(0, 120);
    description = description + " ... ";
  }

  return (
    <Card className={classes.projectItem}>
      <h2 style={{ color: uiColor }}>{props.project.projectTitle}</h2>
      <p className={classes.description}>{description}</p>
    </Card>
  );
};
export default ProjectItem;
