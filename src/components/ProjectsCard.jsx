import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/projects.css";

const ProjectsCard = ({ title, description, tags, link, repo }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-tags">
        {tags.map((tag, idx) => (
          <span className="project-tag" key={idx}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
