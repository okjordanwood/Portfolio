import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import WorkCard from "../cards/WorkCard";
import SectionHeader from "../common/SectionHeader";
import "../../styles/work.css";
import { workItems } from "../../data/experience";

export default function WorkSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section id="work" className="work-section">
      <SectionHeader title="Work Experience" />

      <div className="work-timeline">
        {workItems.map((item, index) => (
          <WorkCard key={index} item={item} index={index} controls={controls} />
        ))}
      </div>
    </section>
  );
}
