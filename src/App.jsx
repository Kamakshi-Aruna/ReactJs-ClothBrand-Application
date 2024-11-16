import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/LandingPage/HomePage';
import SignUpPage from './components/Authentication/SignupPage';
import LoginPage from './components/Authentication/LoginPage';
import CategoriesPage from './components/LandingPage/CategoriesPage';
import AboutUsPage from './components/LandingPage/AboutUsPage'; // Import the About Us page

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in from localStorage
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/categories" element={isLoggedIn ? <CategoriesPage /> : <Navigate to="/categories" />} />
        <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={<AboutUsPage />} /> {/* Add About Us Route */}
      </Routes>
    </Router>
  );
};

export default App;
