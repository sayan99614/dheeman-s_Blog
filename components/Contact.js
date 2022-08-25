import React, { useState } from "react";
import styles from "./contact.module.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("comment added successfully");
      });
  };
  return (
    <section className={styles.contact}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your name"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="textarea">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default Contact;
