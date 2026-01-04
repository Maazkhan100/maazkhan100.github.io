import React from "react";

import "./Publication.styles.css";

export default function PublicationItem({ authors, year, title, venue, link, GS, RG }) {
  return (
    <div className="item">
      <p>
        <strong>{authors}</strong> ({year}). {title}{" "}
        <em>{venue}</em>{" "}
        {link && (
          <a href={link} target="_blank" className="anchor">
            {"("}Paper link{")"}
          </a>
        )}{" "}
        {GS && (
          <a href={GS} target="_blank" className="anchor">
            {"("}Google Scholar{")"}
          </a>
        )}{" "}
        {RG && (
          <a href={RG} target="_blank" className="anchor">
            {"("}Research Gate{")"}
          </a>
        )}
      </p> 
    </div>
  );
}
