import React from 'react';
import './Home.css';
//import logo from '../images/logo.jpg';
import bannerImage from '../images/banner1.jpg';
import voteImage from '../images/vote.jpg';
import cleanImage from '../images/clean-neighborhood.jpg';
import Notification from '../components/Notification';
const Home = () => {
  return (
    <div className="home-container">  
    <main className="home-main">
      <div className="banner">
      <img src={bannerImage} alt="Community Banner" className="banner-img" />
      {/* <img src={voteImage} alt="Community Banner" className="vote-img" />
      <img src={cleanImage} alt="Community Banner" className="clean-neightborhood-img" /> */}
    <div className="banner-text">
      <h2>Empowering Local Voices</h2>
      <p>Connect with your neighborhood like never before</p>
    </div>
  </div>
  <div className="image-section">
    <img src={voteImage} alt="Vote" className="info-img" />
    <img src={cleanImage} alt="Clean Neighborhood" className="info-img" />
  </div>

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
        <Notification/>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Local Democracy Platform</p>
      </footer>
    </div>
  );
};

export default Home;
