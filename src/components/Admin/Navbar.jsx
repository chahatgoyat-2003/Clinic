import React from "react";

function Navbar() {

  return (

    <div className="admin-navbar">

      <h3>
        Admin Panel
      </h3>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("adminLogin");
          window.location.href = "/admin/login";
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;