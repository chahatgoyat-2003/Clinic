import React from "react";
import "./HeroSection.css";

import {
  FaHeartbeat,
  FaPrescriptionBottleAlt,
  FaStethoscope,
  FaMicroscope,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}

      <div className="hero-content">

        <h1>
          Providing Best <br />
          Medical Care
        </h1>

        <p>
          The health and well-being of our patients and their
          health care team will always be our priority,
          so we follow the best practices for cleanliness.
        </p>

        {/* FEATURES */}

        <div className="hero-features">

          <div className="feature-box">
            <div className="feature-icon">
              <FaHeartbeat />
            </div>
            <span>Examination</span>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <FaPrescriptionBottleAlt />
            </div>
            <span>Prescription</span>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <FaStethoscope />
            </div>
            <span>Cardiogram</span>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <FaMicroscope />
            </div>
            <span>Blood Pressure</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;