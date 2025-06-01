import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/about.css";

const cardData = [
  {
    title: "👨‍💻 Developer",
    content: "Passionate about building responsive and performant web apps.",
  },
  {
    title: "🎓 CS Graduate",
    content:
      "Graduated with a B.S. in Computer Science from the University of South Carolina",
  },
  {
    title: "🎨 UI/UX Focused",
    content:
      "Loves designing clean, intuitive interfaces with smooth animations.",
  },
  {
    title: "🚀 Lifelong Learner",
    content:
      "Always exploring new technologies, frameworks, and best practices.",
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
    <section id="about" className="about-section section-screen">
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
          <motion.div
            key={index}
            className={`flip-card ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">{card.title}</div>
              <div className="flip-card-back">{card.content}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/okjordanwood"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-wood-085274247/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
