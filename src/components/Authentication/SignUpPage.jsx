import React, { useState } from 'react';
import './SignUpPage.css'; // Import the scoped CSS

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isUserExist, setIsUserExist] = useState(false);

  // Dummy users data (In real applications, fetch from a server)
  const existingUsers = [
    { email: 'testuser@example.com', username: 'testuser' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user already exists
    const userExists = existingUsers.some(
      (user) => user.email === email || user.username === username
    );
    if (userExists) {
      setIsUserExist(true);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Perform the registration (e.g., save user to a server or database)
    console.log('User Registered:', { username, email, password });
    // Redirect to login or home page after successful registration
    // In real use case, you can redirect using `navigate` from React Router.
    alert('Registration successful!');
  };

  return (
    <div className="signup-page"> {/* Add a wrapper class for the signup page */}
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

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

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isUserExist && <p style={{ color: 'red' }}>User already exists. Please login!</p>}

        <button type="submit">Submit</button>
      </form>

      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default SignUpPage;
