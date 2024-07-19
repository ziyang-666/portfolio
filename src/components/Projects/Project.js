import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";

const Projects = (props) => {
  const nonThemeColor = useSelector((state) => state.nonThemeColor);
  const uiColor = useSelector((state) => state.uiColor);
  let projects = ProjectsData.DUMMY_PROJECTS;
  return (
    <div id="projects">
      <div className={styles.projects}>
        <section className={styles.projectImg}>
          <img src={projectCoverImg} alt="" />
        </section>
        <section className={styles.projectHeader}>
          <h1>
            <span style={{ color: nonThemeColor }}>My Recent </span>
            <span style={{ color: uiColor }}>Works</span>
          </h1>
          <div>
            My work involves utilizing a wide range of cutting-edge technology
            tools. With 6 years of experience as a full stack engineer, I
            specialize in front-end development, particularly with React. My
            expertise lies in creating dynamic and responsive web applications
          </div>
        </section>
      </div>
      <ProgrammingSkills />
      <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>
        My Projects
      </h1>
      <div className={styles.projectList}>
        {projects.map((item, index) => {
          return <ProjectItem key={index} project={item} />;
        })}
      </div>
      <div className={styles.moreProject}>
        <a
          target="_blank"
          rel="noreferrer"
          href={`${SocialData.githubLink}?tab=repositories`}
        ></a>
      </div>
    </div>
  );
};

export default Projects;
