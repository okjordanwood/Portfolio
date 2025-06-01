import React from "react";

const SkillsCard = ({ name, level, icon }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="skills-card fade-in">
      <div className="skills-icon">{icon}</div>
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
