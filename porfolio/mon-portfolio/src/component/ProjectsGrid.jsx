// components/ProjectsGrid.js
import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "../style/projects.css";

function ProjectsGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => setSelected(project)}
        />
      ))}
      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

export default ProjectsGrid;
