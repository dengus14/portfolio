import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

// phase: "closed" | "expanding" | "open" | "collapsing"
const Home = () => {
  const [phase, setPhase] = useState("closed");
  const [snippetVisible, setSnippetVisible] = useState(true);
  const [naturalWidth, setNaturalWidth] = useState(null);
  const timerRef = useRef(null);
  const btnRef = useRef(null);

  // Measure the button's natural width once it renders
  useEffect(() => {
    if (btnRef.current && naturalWidth === null) {
      setNaturalWidth(btnRef.current.offsetWidth);
    }
  }, [naturalWidth]);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleToggle = () => {
    clearTimer();

    if (phase === "closed") {
      setSnippetVisible(false);
      setPhase("expanding");
      timerRef.current = setTimeout(() => setPhase("open"), 380);
    } else if (phase === "open") {
      setPhase("collapsing");
      timerRef.current = setTimeout(() => {
        setPhase("closed");
        timerRef.current = setTimeout(() => setSnippetVisible(true), 380);
      }, 450);
    }
  };

  const resumeOpen = phase === "open";
  const btnExpanded = phase === "expanding" || phase === "open";

  // Compute the inline width to animate
  const btnStyle = naturalWidth
    ? {
        width: btnExpanded ? "min(760px, 100vw - 40px)" : `${naturalWidth}px`,
        transition: "width 0.35s cubic-bezier(0.25, 1, 0.5, 1), color 0.25s ease, border-color 0.25s ease",
      }
    : {};

  return (
    <div className="home-page">
      <div
        className="code-snippet-wrapper"
        style={{
          opacity: snippetVisible ? 1 : 0,
          pointerEvents: snippetVisible ? "auto" : "none",
          transition: "opacity 0.4s ease",
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
        <button
          ref={btnRef}
          className={`btn resume-btn${btnExpanded ? " resume-btn--expanded" : ""}`}
          style={btnStyle}
          onClick={handleToggle}
        >
          <span className="resume-btn__label">
            {phase === "open" || phase === "collapsing" ? "Close Resume" : "View My Resume"}
          </span>
        </button>
      </div>

      <div className={`resume-panel${resumeOpen ? " resume-panel--open" : ""}`}>
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
