import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import Toast from "../Toast/Toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const API_CONTACT = "https://denisportfolio.duckdns.org/api/contact";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_CONTACT, formData);
      setToastMessage("Message sent!");
      setToastType("success");
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setToastMessage("Failed to send message.");
      setToastType("error");
      setShowToast(true);
      console.log(error);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-panel-modern">
        <h1 className="contact-title-modern">Contact Me</h1>
        <p className="contact-subtitle-modern">
          Feel free to drop a message, I’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="contact-form-modern">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ContactForm;
