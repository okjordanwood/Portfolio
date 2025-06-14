import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import "../../styles/contact.css";

const ContactSection = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          form.current.reset();
          recaptchaRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-outer">
      <motion.div
        className="contact-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p>I’d love to hear from you! Feel free to reach out below.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            ref={recaptchaRef}
            className="recaptcha"
          />
          <button type="submit" className="send-button">
            Send Message <FiSend className="send-icon" />
          </button>
          {submitted && (
            <span className="confirmation">Message sent successfully!</span>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
