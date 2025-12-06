import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <Link to="/" className="nav-brand">
        Maaz <span>Portfolio</span>
      </Link>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/research-projects">Research Projects</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/awards">Awards</Link>
      </div>
    </nav>
  );
}
