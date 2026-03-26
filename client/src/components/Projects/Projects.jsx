import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import projects from "../../constants/projects";
import "./Projects.css";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [phase, setPhase] = useState("idle"); // "idle" | "fading-out" | "expanded" | "fading-in"
  const containerRef = useRef(null);

  const handleExpand = (index) => {
    setPhase("fading-out");
    setTimeout(() => {
      setExpandedIndex(index);
      setPhase("expanded");
    }, 300);
  };

  const handleCollapse = () => {
    setPhase("fading-in");
    setTimeout(() => {
      setExpandedIndex(null);
      setPhase("idle");
      // scroll back to projects section
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && expandedIndex !== null) handleCollapse(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expandedIndex]);

  const expanded = expandedIndex !== null ? projects[expandedIndex] : null;

  const gridClass = [
    "projects-grid",
    phase === "fading-out" ? "projects-grid--out" : "",
    phase === "idle" ? "projects-grid--in" : "",
  ].filter(Boolean).join(" ");

  const panelClass = [
    "project-expanded-panel",
    phase === "expanded" ? "project-expanded-panel--in" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className="projects-container" ref={containerRef}>
      <h2 className="projects-title">My Projects</h2>

      {/* Grid — hidden while a card is expanded */}
      {expandedIndex === null && (
        <div className={gridClass}>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              linkText={project.linkText}
              status={project.status}
              year={project.year}
              imgSrc={project.images && project.images.length > 0 ? project.images[0] : null}
              onExpand={() => handleExpand(index)}
            />
          ))}
        </div>
      )}

      {/* Expanded panel — rendered in place of the grid */}
      {expandedIndex !== null && expanded && (
        <div className={panelClass}>
          {/* Back button */}
          <button className="project-panel__back" onClick={handleCollapse}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </button>

          <div className="project-panel__inner">
            {/* Left col — info */}
            <div className="project-panel__info">
              <div className="project-panel__meta">
                <span className="project-panel__year">{expanded.year}</span>
                <span className={`project-panel__status project-panel__status--${expanded.status === "Live" ? "live" : expanded.status === "In Development" ? "dev" : "done"}`}>
                  {expanded.status}
                </span>
              </div>

              <h2 className="project-panel__title">{expanded.title}</h2>
              <p className="project-panel__role">{expanded.role}</p>
              <p className="project-panel__detail">{expanded.detail}</p>

              <div className="project-panel__stack">
                <h3 className="project-panel__stack-label">Tech Stack</h3>
                <ul className="project-panel__stack-list">
                  {expanded.techStack.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              {expanded.link && (
                <a href={expanded.link} target="_blank" rel="noopener noreferrer" className="project-panel__link">
                  View Live
                </a>
              )}
            </div>

            {/* Right col — screenshots */}
            <div className="project-panel__media">
              <h3 className="project-panel__stack-label">Screenshots</h3>
              {expanded.images && expanded.images.length > 0 ? (
                <div className="project-panel__image-grid">
                  {expanded.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${expanded.title} screenshot ${i + 1}`}
                      className="project-panel__image"
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                <div className="project-panel__no-images">
                  No screenshots available yet
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
