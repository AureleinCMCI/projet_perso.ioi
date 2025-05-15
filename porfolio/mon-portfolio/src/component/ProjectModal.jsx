// components/ProjectModal.js
import React from "react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <div className="project-subtitle">{project.subtitle}</div>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p>{project.description}</p>
        <div className="project-meta">
          <div>Date : {project.date}</div>
          <div>Catégorie : {project.category}</div>
        </div>
        <button className="modal-close" onClick={onClose}>✕ RETOUR</button>
      </div>
    </div>
  );
}

export default ProjectModal;
