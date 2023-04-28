import React, { useState } from "react";

const LoginPartial = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Sign In</h2>
      <p>Welcome back!</p>
      <p>Sign in to continue</p>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-theme">
        Sign In
      </button>

      <div className="signup-link">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </form>
  );
};

export default LoginPartial;
