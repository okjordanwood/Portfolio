import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectsCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
      </div>
      <ul className="project-desc">
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="github-icon-link"
            aria-label="GitHub repository"
          >
            <FaGithub className="github-icon" />
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="external-link-icon"
            aria-label="Live site"
          >
            <FiExternalLink className="external-icon" />
          </a>
        )}
      </div>
    </div>
  );
}
