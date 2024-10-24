import React, { useState } from 'react';
import CongratsMessage from './CongratsMessage'; // Importing the CongratsMessage component
import '../styles/PasswordInput.css'; // Importing styles

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const correctPassword = '161102'; // Replace with your ex's birthday (e.g., '1995-02-12')
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="password-input-container">
      {authenticated ? (
        <CongratsMessage />
      ) : (
        <>
          <h1>Enter Password</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password(Your birthday)"
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default PasswordInput;