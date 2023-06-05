import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-name">
        <a href="/" className="text-decoration-none">Maxwell Colby</a>
      </div>
      <div className="nav">
        <a href="/about" className="nav-section">
          about
        </a>
        <a href="/blog" className="nav-section">
          blog
        </a>
        <a href="#projects-section" className="nav-section">
          projects
        </a>
        <a href="#contact-section" className="nav-section">
          contact
        </a>
      </div>
    </header>
  );
};

export default Header;
