import React from "react";
import SectionHeader from "./SectionHeader";
import SkillsCard from "./SkillsCard";
import "../styles/skills.css";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90, icon: "FaReact" },
      { name: "JavaScript", level: 85, icon: "SiJavascript" },
      { name: "HTML", level: 95, icon: "FaHtml5" },
      { name: "CSS", level: 90, icon: "FaCss3Alt" },
      { name: "TailwindCSS", level: 85, icon: "SiTailwindcss" },
      { name: "TypeScript", level: 70, icon: "SiTypescript" },
      { name: "Vue.js", level: 75, icon: "FaVuejs" },
      { name: "Vite", level: 75, icon: "SiVite" },
      { name: "NEXT.js", level: 70, icon: "SiNextdotjs" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, icon: "FaNodeJs" },
      { name: "Express.js", level: 75, icon: "SiExpress" },
      { name: "Java", level: 80, icon: "FaJava" },
      { name: "Python", level: 70, icon: "FaPython" },
      { name: "REST APIs", level: 80, icon: "SiApachenetbeanside" },
      { name: "PowerShell", level: 65, icon: "SiPowershell" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 75, icon: "SiPostgresql" },
      { name: "MongoDB", level: 70, icon: "SiMongodb" },
      { name: "SQL", level: 80, icon: "SiMysql" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85, icon: "FaGitAlt" },
      { name: "GitHub", level: 85, icon: "FaGithub" },
      { name: "GitLab", level: 75, icon: "SiGitlab" },
      { name: "Netlify", level: 70, icon: "SiNetlify" },
      { name: "Figma", level: 65, icon: "FaFigma" },
      { name: "Browser DevTools", level: 70, icon: "FaChrome" },
    ],
  },
  {
    category: "Game Development",
    skills: [
      { name: "Godot", level: 65, icon: "SiGodotengine" },
      { name: "GDScript", level: 60, icon: "SiGodotengine" },
      { name: "Tiled", level: 60, icon: "SiTiled" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      {
        name: "Data Structures & Algorithms",
        level: 80,
        icon: "FaProjectDiagram",
      },
      { name: "Design Patterns", level: 75, icon: "FaCubes" },
      { name: "OOP", level: 75, icon: "FaCode" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section section-screen">
      <SectionHeader title="Skills" />
      <div className="skills-grid">
        {skillsData.map((group, i) => (
          <div className="skill-group-container" key={i}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-items">
              {group.skills.map((skill, j) => (
                <SkillsCard key={j} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
