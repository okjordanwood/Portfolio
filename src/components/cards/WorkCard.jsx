import React from "react";
import { motion } from "framer-motion";

export default function WorkCard({ item, index, controls }) {
  return (
    <motion.div
      className="work-item"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 },
        },
      }}
    >
      <div className="work-marker" />
      <div className="work-card">
        {item.logo && item.link ? (
          <a href={item.link} target="_blank" rel="noreferrer">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className={item.logoClass}
            />
          </a>
        ) : (
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className={item.logoClass}
          />
        )}
        <h3 className="work-role">{item.title}</h3>
        <p className="work-company">{item.company}</p>
        <p className="work-period">{item.period}</p>

        {Array.isArray(item.description) ? (
          <ul className="work-description">
            {item.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="work-description">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
}
