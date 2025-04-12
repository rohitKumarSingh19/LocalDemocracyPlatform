import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const userNeighborhood = localStorage.getItem('neighborhood') || 'your neighborhood';

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <p>You're viewing insights and actions for <strong>{userNeighborhood}</strong>.</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>📬 Latest Notifications</h3>
          <p>Stay updated with the most recent events and decisions.</p>
        </div>
        <div className="dashboard-card">
          <h3>🗳️ Ongoing Votes</h3>
          <p>See active polls and cast your vote.</p>
        </div>
        <div className="dashboard-card">
          <h3>🧾 Your Feedback</h3>
          <p>View and track feedback you’ve submitted to your local reps.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
