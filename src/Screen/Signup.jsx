import React, { useState } from 'react'
import { signupUser } from '../Config/firebase'
import './signup.css'; 
import { Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupAcc = () => {
    const sign = signupUser (email,password)
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <button onClick={signupAcc}>Sign Up</button>
     <p>You already have an account<br /><Link to={'/signin'}>Click here</Link></p> 
    </div>
  );
}
