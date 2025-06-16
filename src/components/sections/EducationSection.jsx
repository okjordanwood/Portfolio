import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import "../../styles/education.css";

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
        <div className="education-content-wrapper">
          <a href="https://sc.edu/">
            <img
              src="/uofsc.svg"
              alt="University of South Carolina logo"
              className="education-logo"
            />
          </a>
          <div className="education-text">
            <h3 className="school-name">University of South Carolina</h3>
            <p className="degree">B.S. in Computer Science</p>
            <p className="dates">Graduated May 2025</p>
          </div>
        </div>

        <ul className="education-details">
          <li>President’s List / Dean’s List every semester</li>
          <li>Capstone: 2D puzzle platformer using Godot</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
