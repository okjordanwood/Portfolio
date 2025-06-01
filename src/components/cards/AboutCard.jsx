import React from "react";
import { motion } from "framer-motion";

export default function AboutCard({ title, content, flipped, onClick }) {
  return (
    <motion.div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{title}</div>
        <div className="flip-card-back">{content}</div>
      </div>
    </motion.div>
  );
}
