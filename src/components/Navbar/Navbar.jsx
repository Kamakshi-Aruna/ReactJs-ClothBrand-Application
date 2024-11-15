import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <i className="fas fa-tshirt"></i> Clothing Brand
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search clothes..." />
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <ul className="navbar-links">
        <li
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleLinkClick('home')}
        >
          <i className="fas fa-home"></i> Home
        </li>
        <li
          className={activeLink === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}
        >
          <i className="fas fa-info-circle"></i> About Us
        </li>
        <li
          className={activeLink === 'login' ? 'active' : ''}
          onClick={() => handleLinkClick('login')}
        >
          <i className="fas fa-sign-in-alt"></i> Login
        </li>
        <li
          className={activeLink === 'signup' ? 'active' : ''}
          onClick={() => handleLinkClick('signup')}
        >
          <i className="fas fa-user-plus"></i> Signup
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
