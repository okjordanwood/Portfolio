import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../styles/work.css";
import SectionHeader from "./SectionHeader";

const workItems = [
  {
    logo: "/zeus.svg",
    title: "Software Developer Intern",
    company: "Zeus Industrial Products",
    period: "May 2023 – August 2023",
    description:
      "Developed internal full-stack tools for automating workflow processes. Collaborated cross-functionally with manufacturing and R&D teams.",
    logoClass: "zeus-logo",
  },
  {
    logo: "/doit.svg",
    title: "Software Developer Intern",
    company: "Department of Information Technology",
    period: "May 2022 – August 2022",
    description:
      "Worked on internal applications and dashboards for university administration. Assisted in debugging legacy systems and developing new tools in a collaborative team environment.",
    logoClass: "doit-logo",
  },
  {
    logo: "/uofsc.svg",
    title: "Computer Science Graduate",
    company: "University of South Carolina",
    period: "Graduated May 2024",
    description:
      "B.S. in Computer Science with focus in software engineering. Completed projects in web dev, algorithms, and system design.",
    logoClass: "uofsc-logo",
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="work-section" id="work">
      <SectionHeader title="Work Experience" />
      <div className="work-timeline" ref={ref}>
        {workItems.map((item, index) => (
          <motion.div
            key={index}
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
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className={item.logoClass}
                />
              )}
              <h3 className="work-role">{item.title}</h3>
              <p className="work-company">{item.company}</p>
              <p className="work-period">{item.period}</p>
              <p className="work-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
