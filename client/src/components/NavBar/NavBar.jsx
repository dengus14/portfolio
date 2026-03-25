import React, { useEffect, useState } from "react";
import "./NavBar.css";

const SECTIONS = ["home", "about", "projects"];

const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/favicon.ico" alt="logo" className="nav-logo" />
        <span>enis</span>
      </div>
      <div className="nav-links">
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
