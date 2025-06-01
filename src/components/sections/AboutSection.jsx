import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import AboutCard from "../cards/AboutCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/about.css";

const cardData = [
  {
    title: "👨‍💻 Software Developer",
    content:
      "I enjoy solving real problems through thoughtful design and reliable code — always with the user in mind.",
  },
  {
    title: "💡 Fast Learner",
    content:
      "I pick up new tools and frameworks quickly and love experimenting with different ways to build smarter, better software.",
  },
  {
    title: "🚀 Project-Driven",
    content:
      "I’ve led and contributed to projects like a 2D puzzle platformer, a responsive portfolio site, and a course management system.",
  },
  {
    title: "🎯 Detail-Oriented",
    content:
      "I care about writing clean code, solving problems the right way, and making sure everything works just right — front to back.",
  },
  {
    title: "🤝 Team Player",
    content:
      "I work well in collaborative settings and enjoy sharing ideas, giving feedback, and solving problems as a team.",
  },
];

export default function AboutSection() {
  const [flipped, setFlipped] = useState(Array(cardData.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <section id="about" className="about-section">
      <SectionHeader title="Meet Jordan" />

      <motion.div
        className="card-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {cardData.map((card, index) => (
          <AboutCard
            key={index}
            title={card.title}
            content={card.content}
            flipped={flipped[index]}
            onClick={() => handleFlip(index)}
          />
        ))}
      </motion.div>

      <motion.div
        className="project-links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{ marginTop: "3rem" }}
      >
        <a
          href="https://github.com/okjordanwood"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon-link"
          aria-label="GitHub profile"
        >
          <FaGithub className="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-wood-085274247/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon-link"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="linkedin-icon" />
        </a>
      </motion.div>
    </section>
  );
}
