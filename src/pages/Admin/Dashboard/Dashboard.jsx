import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import {
  FaUserMd,
  FaCalendarCheck,
  FaEnvelope,
  FaHospital,
} from "react-icons/fa";

function Dashboard() {

  // APPOINTMENTS STATE
  const [appointments, setAppointments] = useState([]);

  // CONTACTS STATE
  const [contacts, setContacts] = useState([]);

  // DOCTORS STATE
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {

    // LOCAL STORAGE SE DATA GET KRNA

    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const savedContacts =
      JSON.parse(localStorage.getItem("contacts")) || [];

    const savedDoctors =
      JSON.parse(localStorage.getItem("doctors")) || [];

    setAppointments(savedAppointments);
    setContacts(savedContacts);
    setDoctors(savedDoctors);

  }, []);

  return (

    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div className="logo-section">
        <h1 style={{ color: "white" }}>CareWell</h1>
        </div>

        <ul className="menu">

          <li className="active">
            Dashboard
          </li>

          <li>
            Appointments
          </li>

          <li>
            Contacts
          </li>

          <li>
            Doctors
          </li>

        </ul>

      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">

        {/* TOP BAR */}

        <div className="topbar">

          <div>
            <h1>Dashboard</h1>
            <p>
              Welcome Back Admin 👋
            </p>
          </div>

          <button className="admin-btn">
            Admin
          </button>

        </div>

        {/* CARDS */}

        <div className="cards">

          {/* TOTAL DOCTORS */}

          <div className="card">

            <div className="icon blue">
              <FaUserMd />
            </div>

            <div>
              <h2>
                {doctors.length}
              </h2>
              <p>Total Doctors</p>
            </div>

          </div>

          {/* APPOINTMENTS */}

          <div className="card">

            <div className="icon green">
              <FaCalendarCheck />
            </div>

            <div>
              <h2>
                {appointments.length}
              </h2>
              <p>Appointments</p>
            </div>

          </div>

          {/* CONTACTS */}

          <div className="card">

            <div className="icon orange">
              <FaEnvelope />
            </div>

            <div>
              <h2>
                {contacts.length}
              </h2>
              <p>Messages</p>
            </div>

          </div>

          {/* DEPARTMENTS */}

          <div className="card">

            <div className="icon purple">
              <FaHospital />
            </div>

            <div>
              <h2>15</h2>
              <p>Departments</p>
            </div>

          </div>

        </div>

        {/* RECENT APPOINTMENTS */}

        <div className="table-section">

          <div className="table-header">

            <h2>
              Recent Appointments
            </h2>

          </div>

          <table>

            <thead>

              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {appointments.length > 0 ? (

                appointments.map((item, index) => (

                  <tr key={index}>

                    <td>
                      {item.name}
                    </td>

                    <td>
                      {item.doctor}
                    </td>

                    <td>
                      {item.date}
                    </td>

                    <td>

                      <span className="status confirmed">
                        Confirmed
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td colSpan="4" className="no-data">
                    No Appointments Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;