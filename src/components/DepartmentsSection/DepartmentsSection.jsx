import React from "react";
import "./DepartmentsSection.css";

import department1 from "../../assets/img2.png";
import department2 from "../../assets/img3.png";
import department3 from "../../assets/img4.png";
import department4 from "../../assets/img5.png";
import department5 from "../../assets/img6.png";
import department6 from "../../assets/img7.png";

function DepartmentsSection() {
  return (
    <section className="departments">

      <div className="departments-top">

        <h2>Our Departments</h2>

        <div className="line"></div>

        <p>
          We provide trusted healthcare services with modern
          facilities and experienced doctors for every patient.
        </p>

      </div>

      <div className="departments-grid">

        <div className="department-card">
          <img src={department1} alt="" />

          <div className="card-content">
            <h3>Eye Care</h3>

            <p>
              Complete eye checkups with modern treatment facilities.
            </p>

            <a href="/">Learn More</a>
          </div>
        </div>

        <div className="department-card">
          <img src={department2} alt="" />

          <div className="card-content">
            <h3>Physical Therapy</h3>

            <p>
              Professional therapy sessions for pain relief and recovery.
            </p>

            <a href="/">Learn More</a>
          </div>
        </div>

        <div className="department-card">
          <img src={department3} alt="" />

          <div className="card-content">
            <h3>Dental Care</h3>

            <p>
              Advanced dental treatment with experienced specialists.
            </p>

            <a href="/">Learn More</a>
          </div>
        </div>

        <div className="department-card">
          <img src={department4} alt="" />

          <div className="card-content">
            <h3>Diagnostic Test</h3>

            <p>
              Accurate medical testing using advanced technology.
            </p>

            <a href="/">Learn More</a>
          </div>
        </div>

        <div className="department-card">
          <img src={department5} alt="" />

          <div className="card-content">
            <h3>Skin Surgery</h3>

            <p>
              Safe and professional cosmetic and skin treatments.
            </p>

            <a href="/">Learn More</a>
          </div>
        </div>

        <div className="department-card">
          <img src={department6} alt="" />

          <div className="card-content">
            <h3>Surgery Service</h3>

            <p>
              Expert surgeons providing high quality medical care.
            </p>

            <a href="/">Learn More</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default DepartmentsSection;