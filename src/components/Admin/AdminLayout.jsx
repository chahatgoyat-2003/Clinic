import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "./Admin.css";

function AdminLayout() {
  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="admin-main">

        {/* TOP NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="admin-page-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;