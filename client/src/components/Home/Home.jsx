import React, { useState, useRef } from "react";
import "./Home.css";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

const Home = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [snippetVisible, setSnippetVisible] = useState(true);
  const closeTimerRef = useRef(null);

  const handleToggle = () => {
    if (resumeOpen) {
      // Start closing: hide snippet immediately, show after panel fully collapses + scroll settles
      setResumeOpen(false);
      clearTimeout(closeTimerRef.current);
      // height collapses (0.5s delay + 0.5s duration = 1s), width collapses (0.45s)
      // add extra buffer for scroll to settle
      closeTimerRef.current = setTimeout(() => {
        setSnippetVisible(true);
      }, 1400);
    } else {
      // Opening: hide snippet right away
      setSnippetVisible(false);
      clearTimeout(closeTimerRef.current);
      setResumeOpen(true);
    }
  };

  return (
    <div className={`home-page${resumeOpen ? " resume-open" : ""}`}>
      <div
        className="code-snippet-wrapper"
        style={{
          opacity: snippetVisible ? 1 : 0,
          pointerEvents: snippetVisible ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}
      >
        <CodeSnippet />
      </div>

      <h2 className="home-title reveal" style={{ animationDelay: "0.3s" }}>Welcome to My Portfolio</h2>
      <div className="home-intro-row">
        <img src="/Gusev_Denis_732-217-Edit.jpg" alt="Denis Gusev" className="home-photo reveal" style={{ animationDelay: "0.5s" }} />
        <div className="home-intro reveal" style={{ animationDelay: "0.5s" }}>
          <p className="home-subtitle">Hi, I'm Denis 👋</p>
          <p className="home-description">
            I'm a Full-Stack Developer in training who loves building sleek, scalable
            web apps. My focus is on React.js for frontend, and either SpringBoot Java or Node.js.
          </p>
        </div>
      </div>
      <div className="home-buttons reveal" style={{ animationDelay: "0.9s" }}>
        <button className="btn" onClick={handleToggle}>
          {resumeOpen ? "Close Resume" : "View My Resume"}
        </button>
      </div>

      <div className="resume-panel">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  );
};

export default Home;
