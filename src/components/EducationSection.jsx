import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import "../styles/education.css";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <SectionHeader title="Education" />

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="school-name">University of South Carolina</h3>

        <div className="education-content">
          <p className="degree">B.S. in Computer Science</p>
          <p className="dates">Graduated May 2025</p>
          <ul className="education-details">
            <li>President’s List / Dean’s List every semester</li>
            <li>Capstone: 2D puzzle platformer using Godot</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
