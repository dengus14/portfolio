import React from "react";
import "./Home.css";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

const Home = () => {
  return (
    <div className="home-page">
      <CodeSnippet />

      <h2 className="home-title reveal" style={{ animationDelay: "0.3s" }}>Welcome to My Portfolio</h2>
      <p className="home-subtitle reveal" style={{ animationDelay: "0.5s" }}>Hi, I'm Denis 👋</p>
      <p className="home-description reveal" style={{ animationDelay: "0.7s" }}>
        I'm a Full-Stack Developer in training who loves building sleek, scalable
  web apps. My focus is on JavaScript, React, and modern backend frameworks.
      </p>
      <div className="home-buttons reveal" style={{ animationDelay: "0.9s" }}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          View My Resume
        </a>
        <a href="#contact" className="btn btn-outline">Get in Touch</a>
      </div>
    </div>
  );
};

export default Home;
