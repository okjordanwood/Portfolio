import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaGitAlt, FaJava } from "react-icons/fa";
import {
  SiGodotengine,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiVite,
} from "react-icons/si";
import "../styles/projects.css";

const iconMap = {
  react: <FaReact />,
  css: <FaCss3Alt />,
  html: <FaHtml5 />,
  git: <FaGitAlt />,
  java: <FaJava />,
  godot: <SiGodotengine />,
  postgresql: <SiPostgresql />,
  tailwind: <SiTailwindcss />,
  js: <SiJavascript />,
  vite: <SiVite />,
  gds: <span className="custom-tech-icon">GDS</span>,
  pattern: <span className="custom-tech-icon">DP</span>,
};

export default function ProjectsCard({ title, description, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-tech">
        {technologies.map((tech, idx) => (
          <span className="project-icon" key={idx}>
            {iconMap[tech] || tech}
          </span>
        ))}
      </div>
    </div>
  );
}
