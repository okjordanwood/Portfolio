import React from "react";
import { motion } from "framer-motion";
import "../styles/sectionHeader.css";

const SectionHeader = ({ title }) => {
  return (
    <motion.h2
      className="section-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeader;
