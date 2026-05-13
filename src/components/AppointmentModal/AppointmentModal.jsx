import React, { useState } from "react";
import "./AppointmentModal.css";

import {
  FaTimes
} from "react-icons/fa";

const AppointmentModal = ({ closeModal }) => {

  const today =
    new Date().toISOString().split("T")[0];

  // =========================
  // STATES
  // =========================

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    department: "",
    doctor: "",
    name: "",
    phone: "",
    email: ""
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
    const existingAppointments =
      JSON.parse(
        localStorage.getItem("appointments")
      ) || [];

    // NEW DATA ADD
    existingAppointments.push(formData);

    // SAVE
    localStorage.setItem(
      "appointments",
      JSON.stringify(existingAppointments)
    );

    alert("Appointment Booked Successfully");

    // RESET FORM
    setFormData({
      date: "",
      time: "",
      department: "",
      doctor: "",
      name: "",
      phone: "",
      email: ""
    });

    closeModal();
  };

  return (

    <div className="modal-overlay">

      <div className="appointment-modal">

        {/* CLOSE BUTTON */}

        <button
          className="close-btn"
          onClick={closeModal}
        >
          <FaTimes />
        </button>

        {/* TITLE */}

        <h2>
          Book an Appointment
        </h2>

        {/* FORM */}

        <form
          className="appointment-form"
          onSubmit={handleSubmit}
        >

          {/* DATE & TIME */}

          <div className="form-row">

            {/* DATE */}

            <input
              type="date"
              min={today}
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            {/* TIME */}

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

          </div>

          {/* SELECT */}

          <div className="form-row">

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Department
              </option>

              <option>
                Cardiology
              </option>

              <option>
                Neurology
              </option>

              <option>
                Orthopedic
              </option>

            </select>

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Doctor
              </option>

              <option>
                Dr. Sharma
              </option>

              <option>
                Dr. Mehta
              </option>

              <option>
                Dr. Verma
              </option>

            </select>

          </div>

          {/* NAME & PHONE */}

          <div className="form-row">

            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              placeholder="Phone no."
              pattern="[0-9]{10}"
              maxLength="10"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Email"
            className="full-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* BUTTON */}

          <button
            className="confirm-btn"
            type="submit"
          >
            Confirm
          </button>

        </form>

      </div>

    </div>
  );
};

export default AppointmentModal;