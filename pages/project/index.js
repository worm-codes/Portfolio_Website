import React from "react";
import ProjectItem from "../../components/ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";
import styles from "../../styles/Project.module.css";

const index = () => {
  return (
       <div className={styles.projects}>
      <h1> My Projects</h1>
      <div className={styles.projectList}>
        {ProjectList.map((project, idx,i) => {
          return (
            <ProjectItem key={i} id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  )
}

export default index