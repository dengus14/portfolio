import React, { useState } from "react";
import "./Card.css";

const Card = ({ title, description, techStack, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLinked = () =>{
    window.open('https://www.linkedin.com/in/denis-gusev-408a73244/', "_blank")
  }

  return (
    <div className={`card ${isOpen ? 'card-expanded' : ''}`}>
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
      {title === "Course Enrollment" && <button onClick={handleLinked} className="imageButton">view linkedin</button>}
      {title === "Commit Tracker" && <button className="imageButton">PROJECT INCOMING</button>}


      {title === "Status Page" &&<button onClick={handleOpen} className="imageButton">
        {isOpen ? "Close" : "View Work"}
      </button>}

      {isOpen && (
        <div className="image-container">
          <img
            src="/images/StatusPage.png"
            alt="Status Page"
            className="card-image"
            width="400"
            height="200"
          />
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