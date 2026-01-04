import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xykyjqay", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Oops! Something went wrong.");
      }
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Subject</label>
        <input type="text" name="subject" required />

        <label>Message</label>
        <textarea name="message" rows="6" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
}
