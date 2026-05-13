import React from "react";
import "./InfoSection.css";
import { FaPhoneAlt, FaHeartbeat } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

const InfoSection = () => {
  return (
    <div className="info-section">
      
      {/* Emergency Cases */}
      <div className="info-card emergency">
        <div className="icon">
          <FaPhoneAlt />
        </div>

        <h2>Emergency Cases</h2>

        <p>
          Please feel free to contact our friendly reception staff with any
          general or medical enquiry.
        </p>

        <h1>01061245741</h1>
      </div>

      {/* Doctors Timetable */}
      <div className="info-card timetable">
        <div className="icon">
          <HiOutlineClipboardList />
        </div>

        <h2>Doctors Timetable</h2>

        <p>
          Qualified doctors available six days a week, view our timetable to
          make an appointment.
        </p>

        <button>View Timetable →</button>
      </div>

      {/* Opening Hours */}
      <div className="info-card hours">
        <div className="icon">
          <FaHeartbeat />
        </div>

        <h2>Opening Hours</h2>

        <div className="timing">
          <span>Monday - Friday</span>
          <span>8.00 - 7.00 pm</span>
        </div>

        <div className="timing">
          <span>Saturday</span>
          <span>9.00 - 8.00 pm</span>
        </div>

        <div className="timing">
          <span>Sunday</span>
          <span>10.00 - 9.00 pm</span>
        </div>

        <div className="timing">
          <span>Emergency</span>
          <span>24HR / 7Days</span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;