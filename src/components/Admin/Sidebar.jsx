import React from "react";

import {
  NavLink
} from "react-router-dom";

import {
  FaTachometerAlt,
  FaUserMd,
  FaCalendarCheck,
  FaEnvelope
} from "react-icons/fa";

function Sidebar() {

  return (

    <div className="admin-sidebar">

      <h2 className="admin-logo">
        CareWell Admin
      </h2>

      <nav className="sidebar-links">

        <NavLink
          to="/admin/dashboard"
          className="sidebar-link"
        >
          <FaTachometerAlt />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/doctors"
          className="sidebar-link"
        >
          <FaUserMd />
          Doctors
        </NavLink>

        <NavLink
          to="/admin/appointments"
          className="sidebar-link"
        >
          <FaCalendarCheck />
          Appointments
        </NavLink>

        <NavLink
          to="/admin/contacts"
          className="sidebar-link"
        >
          <FaEnvelope />
          Contacts
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;