import React, { useState } from "react";
import "./ContactSection.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function ContactSection() {

  // =========================
  // STATE
  // =========================

  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
    phone: ""
  });

  // =========================
  // HANDLE CHANGE
  // =========================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // =========================
  // HANDLE SUBMIT
  // =========================

  const handleSubmit = (e) => {

    e.preventDefault();

    // OLD DATA
    const existingContacts =
      JSON.parse(
        localStorage.getItem("contacts")
      ) || [];

    // NEW DATA ADD
    existingContacts.push(formData);

    // SAVE
    localStorage.setItem(
      "contacts",
      JSON.stringify(existingContacts)
    );

    alert("Message Sent Successfully");

    // RESET
    setFormData({
      message: "",
      name: "",
      email: "",
      subject: "",
      phone: ""
    });
  };

  return (

    <section className="contact-section">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-form-side">

          <h2>Get in Touch</h2>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <textarea
              placeholder="Enter Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="input-row">

              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-row">

              <input
                type="text"
                placeholder="Enter Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Phone Number (Optional)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

            <button type="submit">
              SEND
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-info">

          <div className="info-box">

            <FaMapMarkerAlt className="info-icon" />

            <div className="info-text">

              <h4>CareWell Clinic</h4>

              <p>
                200, D-block, Green lane, USA
              </p>

            </div>

          </div>

          <div className="info-box">

            <FaPhoneAlt className="info-icon" />

            <div className="info-text">

              <h4>01061245741</h4>

              <p>
                Mon to Fri 9am to 6pm
              </p>

            </div>

          </div>

          <div className="info-box">

            <FaEnvelope className="info-icon" />

            <div className="info-text">

              <h4>
                carewellclinic@contact.com
              </h4>

              <p>
                Send us your query anytime!
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;