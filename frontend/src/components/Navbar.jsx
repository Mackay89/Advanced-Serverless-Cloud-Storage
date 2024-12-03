import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Cloud Storage Logo" />
        <span>Cloud Storage</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

