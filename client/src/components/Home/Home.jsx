import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="home-title">Welcome to My Portfolio</h2>
      <p className="home-subtitle">Hi, I’m Denis 👋</p>
      <p className="home-description">
        I’m a Computer Science student and aspiring Full-Stack Developer. I’ve
        built production-ready web apps during my internship at Northwestern
        Mutual using React, Next.js, and APIs that serve thousands of users.
        I love solving problems with clean, scalable code.
      </p>
      <div className="home-buttons">
        <a href="/projects" className="btn">View My Projects</a>
        <a href="/contact" className="btn btn-outline">Get in Touch</a>
      </div>
    </div>
  );
};

export default Home;
