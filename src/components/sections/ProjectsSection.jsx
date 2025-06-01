import React from "react";
import SectionHeader from "../common/SectionHeader";
import ProjectsCard from "../cards/ProjectsCard";
import "../../styles/projects.css";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section section-screen">
      <SectionHeader title="Projects" />
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectsCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
