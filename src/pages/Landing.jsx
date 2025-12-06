import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaMedium, FaGithub, FaGraduationCap, FaBook } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import gwuIcon from "../assets/university.png";

export default function Landing() {

  // Function to choose icon based on the update title
  const getIcon = (title) => {
    const t = title.toLowerCase();

    if (t.includes("conference") || t.includes("presentation")) {
      return <FaGraduationCap size={20} />;
    }
    if (t.includes("journal") || t.includes("published") || t.includes("paper")) {
      return <FaBook size={20} />;
    }
    if (t.includes("github")) {
      return <FaGithub size={20} />;
    }
    if (t.includes("medium")) {
      return <FaMedium size={20} />;
    }
    if (t.includes("linkedin")) {
      return <FaLinkedin size={20} />;
    }
    if (t.includes("scholarship")) {
      return <img src={gwuIcon} alt="Uni" style={{ width: "22px", height: "22px" }} />;
    }

    // Default fallback icon
    return <FaBook size={20} />;
  };

  const updates = [
    {
      title: "Scholarship: International Impact Award",
      source: "George Washington University",
      link: "https://www.gwu.edu/",
      date: "December 2025",
    },
    {
      title: "IEEE PES ISGT ME 2025 conference presentation",
      source: "Conference",
      link: "https://drive.google.com/file/d/1MI5xMQqIe7vsbTtyK1WAR9C1nygbbiK3/view?usp=sharing",
      date: "25 November 2025",
    },
    {
      title: "Paper accepted in IEEE PES ISGT ME 2025 conference",
      source: "Conference",
      link: "https://me.ieee-isgt.org/",
      date: "02 August 2025",
    },
  ];

  return (
    <section className="section">
      <h2>Welcome!</h2>

      <p>
        Hi, I am Maaz and currently working as a Research Assistant at the Lahore 
        University of Management Sciences (LUMS). You can find the updates of my 
        latest research and projects here. If you would like to learn more about my 
        research projects, or publications, please visit
        the <Link to="/research-projects" className="link-design">Research Projects</Link> and <Link to="/publications" className="link-design">Publications</Link> pages.
      </p>

      <p>
        Please feel free to get in touch!
      </p>

      {/* LATEST UPDATES SECTION */}
      <div className="updates-card">
        <h3 className="updates-title">Latest Updates</h3>

        <div className="updates-list">
          {updates.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="update-item"
            >
              <div className="update-icon">{getIcon(item.title)}</div>

              <div className="update-content">
                <div className="update-title">{item.title}</div>
                <div className="update-meta">
                  <span>{item.source}</span>
                  <RxDotFilled size={16} />
                  <span>{item.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
