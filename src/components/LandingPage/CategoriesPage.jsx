import React, { useState, useEffect } from 'react';
import './CategoriesPage.css'; // Import CSS for styling

const CategoriesPage = () => {
  const [clothes, setClothes] = useState([]); // State to store clothes data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch clothes data on component mount
  useEffect(() => {
    fetch('http://localhost:5000/clothes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setClothes(data); // Set the clothes data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching clothes:', error);
        setError('Failed to load clothes. Please try again later.');
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []); // Empty dependency array means this effect runs only once after the first render

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Display error message if fetching failed
  }

  return (
    <div className="categories-page">
      <div className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li className="category-item">Kurtis</li>
          <li className="category-item">Sarees</li>
          <li className="category-item">Shirts</li>
          <li className="category-item">Jeans</li>
          <li className="category-item">T-Shirts</li>
        </ul>
      </div>
      <div className="content">
        <h1>Clothing Items</h1>
        <div className="clothes-list">
          {clothes.map((cloth) => (
            <div key={cloth.id} className="cloth-card">
              <img src={cloth.image} alt={cloth.name} className="cloth-image" />
              <h3>{cloth.name}</h3>
              <p>Price: ₹{cloth.price}</p>
              <p>{cloth.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
