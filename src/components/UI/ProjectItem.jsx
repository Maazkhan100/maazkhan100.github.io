import React from "react";

export default function ProjectItem({ title, dates, paragraphs }) {
  return (
    <div className="item">
      <div className="item-header">
        <h3>{title}</h3>
        <span className="item-dates">{dates}</span>
      </div>

      {paragraphs.map((p, i) => (
        <p key={i} style={{ marginTop: "0.5rem", lineHeight: "1.65" }}>
          {p}
        </p>
      ))}
    </div>
  );
}


// import React from "react";

// export default function ProjectItem({ title, dates, description }) {
//   return (
//     <div className="item">
//       <div className="item-header">
//         <h3>{title}</h3>
//         <span className="item-dates">{dates}</span>
//       </div>

//       <ul>
//         {description.map((d, i) => (
//           <li key={i}>{d}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
