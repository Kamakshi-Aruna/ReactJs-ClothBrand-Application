import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Get the stored users from localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     // Find the user that matches the email and password
//     const user = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (user) {
//       alert('Login Successful!');
//       setIsLoggedIn(true); // Update the login state
//       navigate('/'); // Redirect to the home page after successful login
//     } else {
//       setError('Invalid email or password');
//     }
//   };


const handleLogin = (e) => {
    e.preventDefault();
  
    // Get the stored users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Find the user that matches the email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      alert('Login Successful!');
      setIsLoggedIn(true); // Update the login state
      localStorage.setItem('isLoggedIn', true); // Store login state in localStorage
      navigate('/'); // Redirect to the home page after successful login
    } else {
      setError('Invalid email or password');
    }
  };
  
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default LoginPage;
