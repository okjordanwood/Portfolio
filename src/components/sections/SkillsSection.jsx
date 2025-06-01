import React from "react";
import SectionHeader from "../common/SectionHeader";
import SkillsCard from "../cards/SkillsCard";
import "../../styles/skills.css";
import { skillsData } from "../../data/skills";
import { iconMap } from "../../utils/iconMap";
import { FaTools } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
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
                  icon={React.createElement(iconMap[skill.icon] || FaTools)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
