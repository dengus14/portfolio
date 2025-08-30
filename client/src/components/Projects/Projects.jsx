import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Projects.css";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL;

  //"http://localhost:4000/api/projects"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="projects-container">
      {loading ? (
        <p className="loading-text">Loading projects...</p>
      ) : (
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
      )}
    </div>
  );
};

export default Projects;
