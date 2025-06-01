import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiVite,
  SiNetlify,
} from "react-icons/si";

const iconMap = {
  FaReact: <FaReact />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaNodeJs: <FaNodeJs />,
  FaGitAlt: <FaGitAlt />,
  FaFigma: <FaFigma />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiMongodb: <SiMongodb />,
  SiExpress: <SiExpress />,
  SiPostgresql: <SiPostgresql />,
  SiVite: <SiVite />,
  SiNetlify: <SiNetlify />,
};

const SkillsCard = ({ name, level, icon }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="skills-card">
      <div className="skills-icon">{iconMap[icon] || <span>🛠</span>}</div>
      <div className="circular-progress">
        <svg width="80" height="80">
          <circle
            className="progress-bg"
            cx="40"
            cy="40"
            r={radius}
            strokeWidth="8"
          />
          <circle
            className="progress"
            cx="40"
            cy="40"
            r={radius}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
      </div>
      <div className="skill-label">{name}</div>
    </div>
  );
};

export default SkillsCard;
