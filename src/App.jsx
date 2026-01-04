import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import About from "./pages/About";
import ResearchProjects from "./pages/ResearchProjects";
import Publications from "./pages/Publications";
import Awards from "./pages/Awards";
import Landing from "./pages/Landing";
// import Contact from "./pages/Contact";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <main className="content">
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/research-projects" element={<ResearchProjects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/awards" element={<Awards />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
