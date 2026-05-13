import React from "react";

function DashboardCards({
  title,
  count
}) {

  return (

    <div className="dashboard-card">

      <h3>{title}</h3>

      <h2>{count}</h2>

    </div>
  );
}

export default DashboardCards;