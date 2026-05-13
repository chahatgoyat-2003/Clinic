import React, { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

import "./AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "adminLogin",
        "true"
      );

      navigate("/admin/dashboard");

    } else {

      alert("Invalid Email or Password");

    }
  };

  return (

    <div className="admin-login-page">

      <form
        className="admin-login-form"
        onSubmit={handleLogin}
      >

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;