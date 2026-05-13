import React from "react";

function Doctors() {

  const doctors =
    JSON.parse(localStorage.getItem("doctors")) || [];

  return (

    <div>

      <h2>
        Doctors List
      </h2>

      <table className="admin-table">

        <thead>

          <tr>
            <th>Name</th>
            <th>Speciality</th>
          </tr>

        </thead>

        <tbody>

          {doctors.map((doctor, index) => (

            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Doctors;