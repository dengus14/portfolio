import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/favicon.ico" alt="logo" className="nav-logo" />
        <span>enis</span>
      </div>
      <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
</div>

    </nav>
  );
};

export default NavBar;
