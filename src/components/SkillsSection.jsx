import React from "react";
import SectionHeader from "./SectionHeader";
import SkillsCard from "./SkillsCard";
import "../styles/skills.css";

// Icon Imports
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaChrome,
  FaFigma,
  FaCode,
  FaCubes,
  FaProjectDiagram,
  FaSitemap,
  FaTools,
  FaTerminal,
  FaLayerGroup,
  FaVuejs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiNetlify,
  SiGitlab,
  SiVite,
  SiExpress,
  SiGodotengine,
} from "react-icons/si";
import { GrDatabase } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { MdGridOn } from "react-icons/md";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbHierarchy3 } from "react-icons/tb";

// Icon Mapping
const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaReact: <FaReact />,
  FaCss3Alt: <FaCss3Alt />,
  FaJava: <FaJava />,
  FaPython: <FaPython />,
  FaNodeJs: <FaNodeJs />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  FaChrome: <FaChrome />,
  FaFigma: <FaFigma />,
  FaCode: <FaCode />,
  FaVuejs: <FaVuejs />,
  FaCubes: <FaCubes />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaSitemap: <FaSitemap />,
  FaTools: <FaTools />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiTypescript: <SiTypescript />,
  SiNextdotjs: <SiNextdotjs />,
  SiMongodb: <SiMongodb />,
  SiPostgresql: <SiPostgresql />,
  SiNetlify: <SiNetlify />,
  SiGitlab: <SiGitlab />,
  SiVite: <SiVite />,
  SiExpress: <SiExpress />,
  SiGodotengine: <SiGodotengine />,
  SiApachenetbeanside: <TbApi />,
  SiSQL: <AiOutlineConsoleSql />,
  SiTiled: <MdGridOn />,
  FaTerminal: <FaTerminal />,
  FaLayerGroup: <FaLayerGroup />,
  TbHierarchy3: <TbHierarchy3 />,
};

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "Vite", level: 95, icon: "SiVite" },
      { name: "HTML", level: 90, icon: "FaHtml5" },
      { name: "JavaScript", level: 80, icon: "SiJavascript" },
      { name: "React.js", level: 75, icon: "FaReact" },
      { name: "CSS", level: 70, icon: "FaCss3Alt" },
      { name: "Vue.js", level: 65, icon: "FaVuejs" },
      { name: "TailwindCSS", level: 60, icon: "SiTailwindcss" },
      { name: "TypeScript", level: 55, icon: "SiTypescript" },
      { name: "NEXT.js", level: 50, icon: "SiNextdotjs" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java", level: 80, icon: "FaJava" },
      { name: "REST APIs", level: 80, icon: "SiApachenetbeanside" },
      { name: "PowerShell", level: 80, icon: "FaTerminal" },
      { name: "Python", level: 75, icon: "FaPython" },
      { name: "Node.js", level: 60, icon: "FaNodeJs" },
      { name: "Express.js", level: 50, icon: "SiExpress" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL", level: 80, icon: "SiSQL" },
      { name: "MongoDB", level: 65, icon: "SiMongodb" },
      { name: "PostgreSQL", level: 60, icon: "SiPostgresql" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 95, icon: "FaGitAlt" },
      { name: "GitHub", level: 95, icon: "FaGithub" },
      { name: "Netlify", level: 95, icon: "SiNetlify" },
      { name: "Browser DevTools", level: 80, icon: "FaChrome" },
      { name: "GitLab", level: 75, icon: "SiGitlab" },
      { name: "Figma", level: 50, icon: "FaFigma" },
    ],
  },
  {
    category: "Game Development",
    skills: [
      { name: "Tiled", level: 95, icon: "SiTiled" },
      { name: "Godot", level: 80, icon: "SiGodotengine" },
      { name: "GDScript", level: 70, icon: "SiGodotengine" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOP", level: 80, icon: "TbHierarchy3" },
      {
        name: "Data Structures & Algorithms",
        level: 70,
        icon: "FaSitemap",
      },
      { name: "Design Patterns", level: 70, icon: "FaLayerGroup" },
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
                <SkillsCard
                  key={j}
                  {...skill}
                  icon={iconMap[skill.icon] || <FaTools />}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
