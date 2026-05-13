import React from "react";
import "./Footer.css";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../../assets/logo3.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col footer-about">

          <div className="footer-logo">

            <img src={logo} alt="logo" />

            <h2>CareWell Clinic</h2>

          </div>

          <p>
            Firmament morning sixth subdue darkness
            creeping gathered divide.
          </p>

          <div className="footer-socials">

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaXTwitter /></a>

            <a href="#"><FaInstagram /></a>

          </div>

        </div>

        {/* DEPARTMENTS */}
        <div className="footer-col">

          <h3>Departments</h3>

          <ul>
            <li>Eye Care</li>
            <li>Skin Care</li>
            <li>Pathology</li>
            <li>Medicine</li>
            <li>Dental</li>
          </ul>

        </div>

        {/* LINKS */}
        <div className="footer-col">

          <h3>Useful Links</h3>

          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
            <li>Appointment</li>
          </ul>

        </div>

        {/* ADDRESS */}
        <div className="footer-col">

          <h3>Address</h3>

          <ul>
            <li>200, D-block, Green lane USA</li>
            <li>01061245741</li>
            <li>CareWellClinic@contact.com</li>
          </ul>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          Copyright ©2026 All rights reserved |
          This template is made with ♡ by
          <span> Colorlib</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;