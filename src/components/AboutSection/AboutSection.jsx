import React from "react";
import "./AboutSection.css";

import clinic1 from "../../assets/clinic1.png";
import clinic2 from "../../assets/clinic2.png";

import {
  FaCheckCircle
} from "react-icons/fa";

function AboutSection() {

  return (

    <section className="about-section">

      {/* LEFT IMAGES */}

      <div className="about-images">

        <img
          src={clinic1}
          alt=""
          className="img-one"
        />

        <img
          src={clinic2}
          alt=""
          className="img-two"
        />

      </div>

      {/* RIGHT CONTENT */}

      <div className="about-content">

        <span className="small-title">
          Welcome to CareWell Clinic
        </span>

        <h2>
          Best Care For Your
          <br />
          Good Health
        </h2>

        <p>
          At CareWell Clinic, we provide trusted
          healthcare services with experienced
          doctors, advanced equipment, and
          compassionate patient care for every age.
        </p>

        {/* LIST */}

        <div className="about-list">

          <div className="list-item">
            <FaCheckCircle className="check-icon" />

            <span>
              Experienced & Certified Doctors
            </span>
          </div>

          <div className="list-item">
            <FaCheckCircle className="check-icon" />

            <span>
              Modern Clinic With Advanced Equipment
            </span>
          </div>

          <div className="list-item">
            <FaCheckCircle className="check-icon" />

            <span>
              Friendly Staff & Fast Appointment
            </span>
          </div>

        </div>

        <button className="about-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default AboutSection;