import React, { useState } from "react";
import "./MedicalServiceSection.css";

import serviceImg from "../../assets/doctor.png";
import doctorImg from "../../assets/img4.png";
import emergencyImg from "../../assets/clinic2.png";

import {
  FaBriefcaseMedical,
  FaUserMd,
  FaPhoneAlt,
} from "react-icons/fa";

function MedicalServiceSection() {

  const [activeTab, setActiveTab] =
    useState("services");

  const serviceData = {

    services: {
      title: "Comprehensive Medical Services",

      description:
        "We offer a full range of medical services designed to meet all your healthcare needs. From preventive care and wellness screenings to advanced diagnostic procedures and specialized treatments, our modern facility is equipped to provide exceptional care for you and your family.",

      image: serviceImg,

      icon: <FaBriefcaseMedical />,
    },

    doctors: {
      title: "Expert Physicians You Can Trust",

      description:
        "Our team of board-certified physicians brings decades of combined experience in specialized medical care. Each doctor is committed to staying current with the latest medical advances to provide you with the highest quality treatment and compassionate care.",

      image: doctorImg,

      icon: <FaUserMd />,
    },

    emergency: {
      title: "24/7 Emergency Medical Care",

      description:
        "Our emergency department is staffed around the clock with experienced trauma specialists and state-of-the-art equipment. We provide immediate, life-saving care when you need it most, with rapid response times and comprehensive emergency services.",

      image: emergencyImg,

      icon: <FaPhoneAlt />,
    },
  };

  return (

    <section className="medical-service">

      {/* TOP MENU */}
      <div className="service-top">

        <div
          className={`service-item ${
            activeTab === "services"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveTab("services")
          }
        >
          Excellent Services
        </div>

        <div
          className={`service-item ${
            activeTab === "doctors"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveTab("doctors")
          }
        >
          Qualified Doctors
        </div>

        <div
          className={`service-item ${
            activeTab === "emergency"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveTab("emergency")
          }
        >
          Emergency Departments
        </div>

      </div>

      {/* CONTENT */}
      <div className="service-content">

        {/* LEFT */}
        <div className="service-left">

          <div className="service-icon">

            {
              serviceData[activeTab].icon
            }

          </div>

          <h2>
            {
              serviceData[activeTab].title
            }
          </h2>

          <p>
            {
              serviceData[activeTab]
                .description
            }
          </p>

        </div>

        {/* RIGHT */}
        <div className="service-right">

          <img
            src={
              serviceData[activeTab].image
            }
            alt="service"
          />

        </div>

      </div>

    </section>

  );
}

export default MedicalServiceSection;