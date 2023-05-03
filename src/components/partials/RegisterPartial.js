import React, { useState } from "react";

const RegisterPartial = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Create Account</h2>
      <p>Sign up to get started!</p>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </div>
      
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
      </div>

      <button type="submit" className="btn btn-theme">
        SIGN UP
      </button>

      <div className="signup-link">
        Already have an account? <a>Sign in</a>
      </div>
    </form>
  );
};

export default RegisterPartial;
