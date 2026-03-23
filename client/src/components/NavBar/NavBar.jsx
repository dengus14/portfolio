import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>MyPortfolio</h1>
      <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
</div>

    </nav>
  );
};

export default NavBar;
