import React, { useState, useEffect } from 'react';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState(''); // State to track sorting option

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
        setClothes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching clothes:', error);
        setError('Failed to load clothes. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Filter clothes based on the selected category
  const filteredClothes = selectedCategory
    ? clothes.filter((cloth) => cloth.category === selectedCategory)
    : clothes;

  // Function to get category name for the heading
  const getCategoryName = () => {
    switch (selectedCategory) {
      case 'Kurtis':
        return 'Kurtis List';
      case 'Sarees':
        return 'Sarees List';
      case 'Shirts':
        return 'Shirts List';
      case 'Jeans':
        return 'Jeans List';
      case 'T-Shirts':
        return 'T-Shirts List';
      default:
        return 'Clothing Items';
    }
  };

  // Sorting function
const sortClothes = (clothes, sortBy) => {
  let sortedClothes = [...clothes];

  // Function to parse price correctly (removing any non-numeric symbols like ₹)
  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^\d.-]/g, '')); // Removes any characters that are not numbers, dots, or hyphens
  };

  if (sortBy === 'price-low-to-high') {
    sortedClothes = sortedClothes.sort((a, b) => {
      const priceA = parsePrice(a.price);  // Convert price to number
      const priceB = parsePrice(b.price);  // Convert price to number
      return priceA - priceB;
    });
  } else if (sortBy === 'price-high-to-low') {
    sortedClothes = sortedClothes.sort((a, b) => {
      const priceA = parsePrice(a.price);  // Convert price to number
      const priceB = parsePrice(b.price);  // Convert price to number
      return priceB - priceA;
    });
  } else if (sortBy === 'rating') {
    sortedClothes = sortedClothes.sort((a, b) => b.rating - a.rating);
  }

  return sortedClothes;
};


  // Apply sorting based on selected option
  const sortedClothes = sortClothes(filteredClothes, sortBy);

  return (
    <div className="categories-page">
  <div className="sidebar">
    <h2>Categories</h2>
    <ul>
      <li className="category-item" onClick={() => setSelectedCategory('Kurtis')}>
        Kurtis
      </li>
      <li className="category-item" onClick={() => setSelectedCategory('Sarees')}>
        Sarees
      </li>
      <li className="category-item" onClick={() => setSelectedCategory('Shirts')}>
        Shirts
      </li>
      <li className="category-item" onClick={() => setSelectedCategory('Jeans')}>
        Jeans
      </li>
      <li className="category-item" onClick={() => setSelectedCategory('T-Shirts')}>
        T-Shirts
      </li>
    </ul>
  </div>

  <div className="content">
    <div className="header">
      <h1>{getCategoryName()}</h1>
    </div>

    <div className="sort-container">
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="price-high-to-low">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>

    <div className="clothes-list">
      {sortedClothes.map((cloth) => (
        <div key={cloth.id} className="cloth-card">
          <img src={cloth.image} alt={cloth.name} className="cloth-image" />
          <h3>{cloth.name}</h3>
          <p>Price: ₹{cloth.price}</p>
          <p>⭐{cloth.rating}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default CategoriesPage;
