import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/logo1.png";

import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";

import AppointmentModal from "./AppointmentModal/AppointmentModal";

const Header = () => {

  // ===== MODAL STATE =====

  const [showModal, setShowModal] = useState(false);

  return (

    <>

      <header className="header">

        {/* LOGO */}

        <div className="logo-section">

          <img
            src={Logo}
            alt="Clinic Logo"
            className="logo"
          />

        </div>

        {/* NAVBAR */}

        <nav className="navbar">

          {/* HOME */}

          <Link to="/">

            <FaHome className="nav-icon" />
            <span>Home</span>

          </Link>

          {/* ABOUT */}

          <Link to="/about">

            <FaInfoCircle className="nav-icon" />
            <span>About</span>

          </Link>

          {/* CONTACT */}

          <Link to="/contact">

            <FaPhoneAlt className="nav-icon" />
            <span>Contact</span>

          </Link>

          {/* BUTTON */}

          <button
            className="appoint-btn"
            onClick={() => setShowModal(true)}
          >
            Book an Appointment
          </button>

        </nav>

      </header>

      {/* ===== MODAL ===== */}

      {
        showModal && (

          <AppointmentModal
            closeModal={() => setShowModal(false)}
          />

        )
      }

    </>
  );
};

export default Header;