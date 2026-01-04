import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-image">
        <Link to="/">
          <img src="/profile.png" alt="Maaz Muhammad Khan" />
        </Link>
      </div>
      <Link to="/" className="name">
        Maaz Muhammad Khan
      </Link>
      <p className="title">
        Research Assistant: Lahore University of Management Sciences (LUMS)
      </p>

      <div className="sidebar-section">
      <ul>
        {/* LOCATION */}
        <li style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#000" }}>
          <FaMapMarkerAlt size={15} color="#000" />
          <span style={{ color: "#000", fontSize: "0.95rem" }}>Washington, DC, USA</span>
        </li>

        {/* EMAIL */}
        <li>
          <a
            href="mailto:maazmkhan.123@gmail.com"
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}
          >
            <FaEnvelope size={15} color="#1a73e8" /> Gmail
          </a>
        </li>

        {/* GITHUB */}
        <li>
          <a
            href="https://github.com/Maazkhan100"
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#000" }}
          >
            <FaGithub size={15} color="#1a73e8" /> GitHub
          </a>
        </li>

        {/* LINKEDIN */}
        <li>
          <a
            href="https://www.linkedin.com/in/maaz-muhammad-khan-2527b7238"
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#000" }}
          >
            <FaLinkedin size={15} color="#1a73e8" /> LinkedIn
          </a>
        </li>

        {/* GOOGLE SCHOLAR */}
        <li>
          <a
            href="https://scholar.google.com/citations?user=MIULc_QAAAAJ"
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#000" }}
          >
            <SiGooglescholar size={15} color="#1a73e8" /> Google Scholar
          </a>
        </li>

        {/* Researchgate */}
        <li>
          <a
            href="https://www.researchgate.net/profile/Maaz-Muhammad-Khan-2?ev=hdr_xprf"
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#000" }}
          >
            <FaResearchgate size={15} color="#1a73e8" /> Researchgate
          </a>
        </li>

        </ul>
      </div>

      <div className="sidebar-section">
        <h3>Resume</h3>
        <a className="button" href="/maaz_resume.pdf" target="_blank">
          Download PDF
        </a>
      </div>
    </aside>
  );
}
