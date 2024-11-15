import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();  // Create a navigate function

  const handleExploreMoreClick = () => {
    navigate('/signup');  // Navigate to the signup page
  };

  return (
    <div className="home-container">
      <div className="home-image">
        <div className="overlay">
          <div className="text-container">
            <h2>Welcome to the Clothing Brand Website!</h2>
            <p>Explore our amazing collection of clothes and accessories.</p>
            <button className="explore-button" onClick={handleExploreMoreClick}>
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
