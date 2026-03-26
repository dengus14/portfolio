import React from "react";
import { ArrowRight, Maximize2, ExternalLink } from "lucide-react";
import "./Card.css";

const STATUS_CONFIG = {
  Live:           { label: "Live",           className: "card__status--live" },
  "In Development": { label: "In Dev",       className: "card__status--dev"  },
  Completed:      { label: "Completed",      className: "card__status--done" },
};

const Card = ({ title, description, techStack, link, linkText = "View Live", onExpand, status, year, imgSrc }) => {
  const statusCfg = STATUS_CONFIG[status] || null;

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article className="card">
      {/* ── Image banner ───────────────────────────────────── */}
      {imgSrc && (
        <div className="card__image-wrap" aria-hidden="true">
          <img
            src={imgSrc}
            alt={`${title} screenshot`}
            className="card__image"
            loading="lazy"
          />
          <div className="card__image-overlay" />
        </div>
      )}

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="card__body">
        {/* Meta row */}
        <div className="card__meta">
          {year && <span className="card__year">{year}</span>}
          {statusCfg && (
            <span className={`card__status ${statusCfg.className}`}>
              {statusCfg.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="card__title">{title}</h2>

        {/* Description */}
        <p className="card__description">{description}</p>

        {/* Tech stack pills */}
        {techStack && techStack.length > 0 && (
          <ul className="card__stack" aria-label="Tech stack">
            {techStack.map((tech, i) => (
              <li key={i} className="card__stack-pill">{tech}</li>
            ))}
          </ul>
        )}

        {/* Footer actions */}
        <div className="card__footer">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card__link"
              onClick={handleLinkClick}
              aria-label={`${linkText} for ${title}`}
            >
              {linkText}
              <ArrowRight className="card__link-icon" size={14} aria-hidden="true" />
            </a>
          )}

          <button
            className="card__expand-btn"
            onClick={onExpand}
            aria-label={`Expand details for ${title}`}
          >
            <Maximize2 size={13} aria-hidden="true" />
            Expand
            <ExternalLink size={11} className="card__expand-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
