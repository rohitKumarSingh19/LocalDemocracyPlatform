import React from 'react';
import './Navbar.css';
import logo from '../images/logo1.jpeg'; // Make sure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Local Democracy Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">Local Democracy Platform</span>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
