// Navbar.jsx
import React from "react";
import "../CSS/Navbar.css";

const Navbar = ({ activeLink }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <a className={activeLink === "home" ? "isActive" : "home"} href="/#">Home</a>
        <a className={activeLink === "project" ? "isActive" : "project"} href="/project">Project</a>
        <a className={activeLink === "education" ? "isActive" : "education"} href="/education">Education</a>
        <a className={activeLink === "experiences" ? "isActive" : "experiences"} href="/experiences">Experiences</a>
      </nav>
    </header>
  );
};

export default Navbar;
