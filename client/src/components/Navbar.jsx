import React from 'react';
import './Navbar.css'; // Make sure to create and link this CSS file
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h3 className="navbar-logo">Local Democracy Platform</h3>
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
