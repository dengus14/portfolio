import React from "react";
import Card from "../Card/Card";
import projects from "../../constants/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
