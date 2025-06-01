import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectsCard from "./ProjectsCard";
import "../styles/projects.css";

const projects = [
  {
    title: "Gemini – Capstone Project",
    description:
      "A 2D platformer with gravity inversion mechanics. Developed using Godot with GDScript. Integrated complex physics behaviors and level design.",
    technologies: ["godot", "gds", "git"],
  },
  {
    title: "Interactive Todo App",
    description:
      "Dynamic task management app with responsive UI. Built using React, styled with FantaCSS, and powered by Vite.",
    technologies: ["react", "vite", "css", "js"],
  },
  {
    title: "Large Language Model",
    description:
      "Backend architecture for academic course tools. Utilized Java, Design Patterns, and PostgreSQL.",
    technologies: ["java", "postgresql", "pattern"],
  },
  {
    title: "Web Portfolio",
    description:
      "The site you're on now — modern, performant, and accessible. Built with React and TailwindCSS.",
    technologies: ["react", "tailwind", "html", "js"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <SectionHeader title="Projects" />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
