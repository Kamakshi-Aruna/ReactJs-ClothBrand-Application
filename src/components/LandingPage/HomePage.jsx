import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreMoreClick = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          interval={5000}
        >
          <div className="carousel-slide">
            <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg" alt="Clothing 1" />
            <div className="carousel-text">
              <h2>Welcome to the Clothing Brand Website!</h2>
              <p>Explore our amazing collection of clothes and accessories.</p>
              <button className="explore-button" onClick={handleExploreMoreClick}>
                Explore More
              </button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="https://cdn.pixabay.com/photo/2015/06/10/13/23/clothesline-804812_1280.jpg" alt="Clothing 2" />
            <div className="carousel-text">
              <h2>Welcome to the Clothing Brand Website!</h2>
              <p>Explore our amazing collection of clothes and accessories.</p>
              <button className="explore-button" onClick={handleExploreMoreClick}>
                Explore More
              </button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="https://media.istockphoto.com/id/1137700343/photo/friends-make-the-world-a-happier-place.jpg?s=612x612&w=0&k=20&c=ps0cNqIOqZXrPnNa2-U0u52WBKb9ZgurZjMfaZF0350=" alt="Clothing 2" />
            <div className="carousel-text">
              <h2>Welcome to the Clothing Brand Website!</h2>
              <p>Explore our amazing collection of clothes and accessories.</p>
              <button className="explore-button" onClick={handleExploreMoreClick}>
                Explore More
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
