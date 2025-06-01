import React, { useEffect, useRef, useState } from "react";
import "../../styles/hero.css"; // fade-letter styles still live here
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

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
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fadeIn");

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const translateY = useTransform(scrollY, [0, 300], [0, -50]);

  // Scroll visibility logic
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

  // Role fade transition logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fadeOut");

      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFadeClass("fadeIn");
      }, 500); // must match fadeOut animation time
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
        <span className="wave-emoji">👋</span>
      </h1>

      <h2 className="hero-subtitle">
        <span className="static-label">I am</span>
        <span className={`highlighted-role ${fadeClass}`}>
          {roles[roleIndex]}
        </span>
      </h2>

      <p className="hero-desc">
        Developer driven by curiosity, clean code, and crafting meaningful
        digital experiences.
      </p>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <FiArrowDown />
      </a>
    </motion.section>
  );
};

export default HeroSection;
