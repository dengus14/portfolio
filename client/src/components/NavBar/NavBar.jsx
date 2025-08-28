
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <div className="space-x-4">
        <Link to="/">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
