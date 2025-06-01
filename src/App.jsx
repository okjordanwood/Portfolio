import React, { useState } from "react";
import SwirlWrapper from "./components/Swirl/SwirlWrapper";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import WorkSection from "./components/sections/WorkSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import EducationSection from "./components/sections/EducationSection";
import { FiArrowUp } from "react-icons/fi";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const App = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const translateY = useTransform(scrollY, [0, 300], [20, 0]);
  const [canClickArrow, setCanClickArrow] = useState(false);

  useMotionValueEvent(opacity, "change", (latest) => {
    setCanClickArrow(latest > 0.05);
  });

  return (
    <div className="app-grid">
      <SwirlWrapper />
      <div className="app-content">
        <Header />
        <main className="main-content">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <WorkSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />

          <motion.a
            href="#"
            className="scroll-indicator"
            style={{
              opacity,
              transform: translateY,
              position: "fixed",
              right: "2rem",
              bottom: "2rem",
              zIndex: 50,
              pointerEvents: canClickArrow ? "auto" : "none",
            }}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.a>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
