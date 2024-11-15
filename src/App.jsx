import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/LandingPage/HomePage';
import SignUpPage from './components/Authentication/SignupPage';
import LoginPage from './components/Authentication/LoginPage';
import CategoriesPage from './components/LandingPage/CategoriesPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in from localStorage
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true); // Set login state if the user is logged in
    }
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        {/* Conditional route for CategoriesPage */}
        <Route
          path="/categories"
          element={isLoggedIn ? <CategoriesPage setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
};

export default App;
