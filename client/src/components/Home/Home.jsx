import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="home-title">Welcome to My Portfolio</h2>
      <p className="home-subtitle">Hi, I’m Denis 👋</p>
      <p className="home-description">
        I’m a Full-Stack Developer in training who loves building sleek, scalable
  web apps. My focus is on JavaScript, React, and modern backend frameworks.  
      </p>
      <div className="home-buttons">
        
       <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
            View My Resume
       </a>
        <a href="/contact" className="btn btn-outline">Get in Touch</a>
      </div>
    </div>
  );
};

export default Home;
