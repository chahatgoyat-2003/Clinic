import React from "react";

function Appointments() {

  const appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

  return (

    <div>

      <h2>
        Appointment List
      </h2>

      <table className="admin-table">

        <thead>

          <tr>
            <th>Name</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Phone</th>
          </tr>

        </thead>

        <tbody>

          {appointments.map((item, index) => (

            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.doctor}</td>
              <td>{item.date}</td>
              <td>{item.phone}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Appointments;