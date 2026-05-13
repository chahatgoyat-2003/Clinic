import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer/Footer";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";

import AdminLogin from "../src/pages/Admin/Login/AdminLogin";
import Dashboard from "../src/pages/Admin/Dashboard/Dashboard";
import Appointments from "../src/pages/Admin/Appointments/Appointments";
import Contacts from "../src/pages/Admin/Contacts/Contacts";
import Doctors from "../src/pages/Admin/Doctors/Doctors";

function Layout() {

  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/admin");

  return (
    <>

      {/* HEADER */}
      {!hideLayout && <Header />}

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ADMIN */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/appointments"
          element={<Appointments />}
        />

        <Route
          path="/admin/contacts"
          element={<Contacts />}
        />

        <Route
          path="/admin/doctors"
          element={<Doctors />}
        />

      </Routes>

      {/* FOOTER */}
      {!hideLayout && <Footer />}

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;