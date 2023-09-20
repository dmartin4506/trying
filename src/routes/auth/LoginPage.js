import React, { useState } from "react";

import './LoginPage.css';
import {Link} from 'react-router-dom'

function LoginPage(){
  const [formData, setFormData] = useState({ username: '', password: ''});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const user = await Auth.signIn(formData.username, formData.password);
      console.log('User Signed In', user);
      // reidrect to some protected route or preform another action after successful sign in
    } catch (error) {
      console.error('Error Signing In', error);
      // Handle the login error, display a message to the user, etc
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Link to="/" className="button">Back to Home</Link>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LoginPage;
