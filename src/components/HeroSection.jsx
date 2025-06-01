import React, { useEffect, useRef, useState } from "react";
import "../styles/hero.css";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = [
  "a Front-End Developer",
  "a Back-End Developer",
  "a Full-Stack Developer",
  "a Software Engineer",
  "an UI/UX Developer",
  "a JavaScript Enthusiast",
];

const HeroSection = () => {
  const heroRef = useRef();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const translateY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          heroRef.current?.classList.add("fade-out");
        } else {
          heroRef.current?.classList.remove("fade-out");
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let fadeTimeout, switchTimeout;
    if (fadeState === "fade-in") {
      fadeTimeout = setTimeout(() => {
        setFadeState("fade-out");
      }, 2500);
    } else {
      switchTimeout = setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState("fade-in");
      }, 500);
    }
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(switchTimeout);
    };
  }, [fadeState]);

  const name = "Jordan";

  return (
    <motion.section
      className="hero-section section-screen"
      ref={heroRef}
      style={{ opacity, y: translateY }}
    >
      <h1 className="hero-title">
        Hi, I'm{" "}
        <span className="gradient-name">
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="fade-letter"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {char}
            </span>
          ))}
        </span>
        <span className="wave-emoji">👋</span>
      </h1>

      <h2 className="hero-subtitle">
        <span className="static-label">I am</span>
        <span className={`highlighted-role ${fadeState}`}>
          {roles[currentRoleIndex]}
        </span>
      </h2>

      <p className="hero-desc">
        Developer driven by curiosity, clean code, and crafting meaningful
        digital experiences.
      </p>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        ↓
      </a>
    </motion.section>
  );
};

export default HeroSection;
