import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      {/* <header className="home-header">
        <h1>Local Democracy Platform</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Notifications</a>
          <a href="#">Feedback</a>
          <a href="#">Login</a>
        </nav>
      </header> */}

      <main className="home-main">
        <h2>Welcome, Citizen!</h2>
        <p>
          Stay updated with your neighborhood’s latest decisions, vote on local proposals,
          give feedback directly to your representatives, and get involved in community initiatives.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>📢 Real-Time Alerts</h3>
            <p>Get notified when local issues affect your area.</p>
          </div>
          <div className="feature-card">
            <h3>🗳️ Community Voting</h3>
            <p>Vote on local concerns and see aggregated opinions.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Feedback</h3>
            <p>Submit feedback to elected officials and view their responses.</p>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Local Democracy Platform</p>
      </footer>
    </div>
  );
};

export default Home;
