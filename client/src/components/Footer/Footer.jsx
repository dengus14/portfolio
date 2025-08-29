import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 Your Name. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/dengus14" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/denis-gusev-408a73244/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
