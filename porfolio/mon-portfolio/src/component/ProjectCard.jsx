// components/ProjectCard.js
import React from "react";

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="project-overlay">
          <span className="project-plus">+</span>
        </div>
      </div>
      <div className="project-title">{project.title}</div>
      <div className="project-subtitle">{project.subtitle}</div>
    </div>
  );
}

export default ProjectCard;
