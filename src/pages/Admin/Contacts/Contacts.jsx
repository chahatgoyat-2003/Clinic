import React from "react";

function Contacts() {

  const contacts =
    JSON.parse(localStorage.getItem("contacts")) || [];

  return (

    <div>

      <h2>
        Contact Messages
      </h2>

      <table className="admin-table">

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
          </tr>

        </thead>

        <tbody>

          {contacts.map((item, index) => (

            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Contacts;