import React from "react";
import "./Card.css";

const Card = ({ title, description, techStack, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      {techStack && techStack.length > 0 && (
        <div className="tech-stack">
          <h3>Tech Stack:</h3>
          <ul>
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project →
        </a>
      )}
    </div>
  );
};

export default Card;
