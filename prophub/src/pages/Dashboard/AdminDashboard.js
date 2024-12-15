import React from "react";
import "../../styles/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Listings</h3>
          <p>50</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>Pending Approvals</h3>
          <p>10</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
