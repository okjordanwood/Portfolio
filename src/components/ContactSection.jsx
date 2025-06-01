import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/contact.css";

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
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
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
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Let's Connect</h2>
        <p>I’d love to hear from you! Feel free to reach out below.</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <ReCAPTCHA
          sitekey="your_recaptcha_site_key"
          ref={recaptchaRef}
          className="recaptcha"
        />
        <button type="submit">Send</button>
        {submitted && (
          <span className="confirmation">Message sent successfully!</span>
        )}
      </form>
    </section>
  );
};

export default ContactSection;
