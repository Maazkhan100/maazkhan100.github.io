import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="top-nav">
      <Link to="/about">About</Link>
      <Link to="/research-projects">Research Projects</Link>
      <Link to="/publications">Publications</Link>
      <Link to="/awards">Awards</Link>
    </nav>
  );
}
