import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  useEffect(() => {
    // Sync login state with localStorage
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn && !isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, setIsLoggedIn]);

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
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="fas fa-info-circle"></i> About Us
          </NavLink>
        </li>

        {/* Conditional links based on login state */}
        {!isLoggedIn ? (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <i className="fas fa-user-plus"></i> Signup
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <i className="fas fa-th-list"></i> Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
