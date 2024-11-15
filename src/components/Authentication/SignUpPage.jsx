import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignupPage.css';

const SignUpPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if the email already exists in the localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setError('Email already exists. Please use a different email.');
    } else {
      // Add the new user to the localStorage
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Sign up successful!');
      setIsLoggedIn(true); // Update the login state
      navigate('/'); // Redirect to the home page after successful signup
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSignUp}>
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

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default SignUpPage;
