import React from "react";

export default function PublicationItem({ authors, year, title, venue, link }) {
  return (
    <div className="item">
      <p>
        <strong>{authors}</strong> ({year}). {title}{" "}
        <em>{venue}</em>{" "}
        {link && (
          <a href={link} target="_blank">
            DOI / Link
          </a>
        )}
      </p>
    </div>
  );
}
