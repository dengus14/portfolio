import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const FULL_NAME = "Denis Gusev";
const TITLE_LINES = ["Full-Stack Developer", "Builder of things."];

const Landing = () => {
  const navigate = useNavigate();
  const [nameChars, setNameChars] = useState([]);
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleText, setTitleText] = useState("");
  const [titleDone, setTitleDone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Phase 1: stagger-in each letter of the name
  useEffect(() => {
    const chars = FULL_NAME.split("").map((char, i) => ({
      char,
      visible: false,
      key: i,
    }));
    setNameChars(chars);

    chars.forEach((_, i) => {
      setTimeout(() => {
        setNameChars((prev) =>
          prev.map((c) => (c.key === i ? { ...c, visible: true } : c))
        );
      }, 300 + i * 80);
    });
  }, []);

  // Phase 2: type the title after name finishes
  useEffect(() => {
    const nameDelay = 300 + FULL_NAME.length * 80 + 300;
    const line = TITLE_LINES[titleIndex];

    let charIdx = 0;
    const interval = setInterval(() => {
      if (charIdx <= line.length) {
        setTitleText(line.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(interval);
        if (titleIndex < TITLE_LINES.length - 1) {
          setTimeout(() => {
            setTitleIndex((prev) => prev + 1);
            setTitleText("");
          }, 900);
        } else {
          setTitleDone(true);
        }
      }
    }, 55);

    const timer = setTimeout(() => {
      // will be cleared if phase 2 starts fresh
    }, nameDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleIndex]);

  // Phase 3: auto-navigate after title is done
  useEffect(() => {
    if (titleDone) {
      const t = setTimeout(() => {
        setLeaving(true);
        setTimeout(() => navigate("/portfolio"), 700);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [titleDone, navigate]);

  return (
    <div className={`landing${leaving ? " landing--leaving" : ""}`}>
      {/* Ambient grid */}
      <div className="landing__grid" aria-hidden="true" />

      {/* Floating orbs */}
      <div className="landing__orb landing__orb--1" aria-hidden="true" />
      <div className="landing__orb landing__orb--2" aria-hidden="true" />
      <div className="landing__orb landing__orb--3" aria-hidden="true" />

      <div className="landing__content">
        {/* Eyebrow label */}
        <p className="landing__eyebrow">Hi, I'm</p>

        {/* Animated name */}
        <h1 className="landing__name" aria-label={FULL_NAME}>
          {nameChars.map(({ char, visible, key }) =>
            char === " " ? (
              <span key={key} className="landing__name-space"> </span>
            ) : (
              <span
                key={key}
                className={`landing__name-char${visible ? " landing__name-char--visible" : ""}`}
              >
                {char}
              </span>
            )
          )}
        </h1>

        {/* Typing subtitle */}
        <div className="landing__title-wrap" aria-live="polite">
          <span className="landing__title">
            {titleText}
            <span className="landing__cursor" aria-hidden="true">|</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
