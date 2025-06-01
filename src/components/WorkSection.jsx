import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import WorkCard from "./WorkCard";
import SectionHeader from "./SectionHeader";
import "../styles/work.css";

const workItems = [
  {
    title: "IT / Computer Science / Engineering Intern",
    company: "Zeus Industrial Products",
    period: "May 2024 – Dec 2024",
    description: [
      "Designed and scripted backend automation tools using PowerShell, improving deployment efficiency across internal systems.",
      "Collaborated with IT and data teams on enterprise software development, contributing to backend logic integrated with Oracle databases.",
      "Participated in planning and execution of software systems that support full‑stack infrastructure improvements.",
    ],
    logo: "/zeus.svg",
    logoClass: "work-logo zeus-logo",
    link: "https://www.zeusinc.com/",
  },
  {
    title: "DoIT Intern",
    company: "University of South Carolina",
    period: "Apr 2022 – Aug 2022",
    description: [
      "Supported software setup and networking for campus‑wide systems; helped document network infrastructure for new deployments.",
      "Built internal tools and mapped 200+ network devices using SSH and CLI tools to improve visibility across IT operations.",
      "Gained full‑stack systems exposure while assisting in diagnosing issues within university‑wide server and IT environments.",
    ],
    logo: "/doit.svg",
    logoClass: "work-logo doit-logo",
    link: "https://sc.edu/about/offices_and_divisions/division_of_information_technology/about_us/",
  },
];

export default function WorkSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section id="work" className="work-section section-screen">
      <SectionHeader title="Work Experience" />

      <div className="work-timeline">
        {workItems.map((item, index) => (
          <WorkCard key={index} item={item} index={index} controls={controls} />
        ))}
      </div>
    </section>
  );
}
