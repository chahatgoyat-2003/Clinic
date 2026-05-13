import React from "react";
import "./ContactBanner.css";

import { Link } from "react-router-dom";

import bannerImg from "../../assets/doctor5.png";

function ContactBanner() {
  return (
    <section
      className="contact-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* OVERLAY */}
      <div className="contact-overlay"></div>

      {/* CONTENT */}
      <div className="contact-content">

        <div className="contact-line"></div>

        <div className="contact-text">

          <h1>Contact</h1>

          <p>
            <Link to="/">Home</Link>

            <span> / </span>

            <Link to="/contact" className="active-link">
              Contact
            </Link>
          </p>

        </div>

      </div>
    </section>
  );
}

export default ContactBanner;