import React from "react";
import "./AboutBanner.css";

import { Link } from "react-router-dom";

import bannerImg from "../../assets/doctor6.png";

function AboutBanner() {

  return (

    <section
      className="about-banner"
      style={{
        backgroundImage: `url(${bannerImg})`
      }}
    >

      <div className="banner-overlay"></div>

      <div className="banner-content">

        <div className="banner-line"></div>

        <div className="banner-text">

          <h1>About Us</h1>

          <p>

            <Link to="/" className="home-link">
              Home
            </Link>

            <span className="slash">
              {" "} / About
            </span>

          </p>

        </div>

      </div>

    </section>
  );
}

export default AboutBanner;