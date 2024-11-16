import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-description">
          Welcome to our online store! We provide a wide range of high-quality clothing and accessories to suit every style and occasion.
          Our mission is to offer fashionable and affordable clothing for everyone. Whether you're looking for casual wear, formal attire, or something unique, we've got you covered.
        </p>
        <p className="about-us-description">
          Our team is dedicated to bringing you the best shopping experience. We pride ourselves on excellent customer service and a hassle-free shopping experience.
        </p>

        <div className="cta-section">
          <p className="cta-text">Want to enjoy more of our features?</p>
          <div className="cta-buttons">
            <a href="/login" className="cta-button login-button">
              Login
            </a>
            <a href="/signup" className="cta-button signup-button">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
