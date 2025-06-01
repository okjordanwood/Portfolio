import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectsCard from "./ProjectsCard";
import "../styles/projects.css";

const projects = [
  {
    title: "To-Do App",
    description:
      "A feature-rich task manager built with React and Tailwind. Includes filtering, local storage sync, and a sleek UI.",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://todope.netlify.app/",
    repo: "https://github.com/okjordanwood/Todo-App",
  },
  {
    title: "Portfolio Website",
    description:
      "A fully custom portfolio showcasing my frontend, backend, and full-stack projects. Built with animations and visual polish.",
    tags: ["React", "Framer Motion", "CSS Modules"],
    link: null,
    repo: "https://github.com/okjordanwood/Portfolio",
  },
  {
    title: "Capstone Project",
    description:
      "A cross-platform application built as part of a senior capstone team. Desktop-focused, involved team collaboration and agile processes.",
    tags: ["GoDOT", "GDScript", "Tiled"],
    link: null,
    repo: null, // You’ll update this when the public fork is ready
  },
  {
    title: "Large Language Model Chat Interface",
    description:
      "Worked with OpenAI APIs to create a functional chatbot with personalized prompts and custom memory features.",
    tags: ["React", "OpenAI API", "Node.js"],
    link: null,
    repo: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <SectionHeader title="Projects" />
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectsCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
