import React from "react";
import SwirlWrapper from "./components/Swirl/SwirlWrapper";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";

const App = () => (
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
      </main>
    </div>
  </div>
);

export default App;
