import React, { useState } from 'react';
import './login.css'
import { signinUser } from '../Config/firebase';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButton = () =>{
    const login = signinUser(email,password)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {/* <form> */}
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={loginButton} type="submit">Login</button>
        <p style={{fontSize:'15px'}}>if you dont have an account <br /><Link to={'/signup'}>Click here</Link></p>
        {/* </form> */}
      </div>
    </div>
  );
}
