import React, { useState } from "react";

const LoginPartial = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="title">Sign In</h2>
        <p className="subtitle">Welcome back!</p>
        <p className="description">Sign in to continue</p>

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

        <div className="remember-forgot">
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <p className="forgot-password">Forgot password?</p>
        </div>

        <div className="center">
          <button type="submit" className="btn btn-theme">
            <i className="fas fa-sign-in-alt"></i> SIGN IN
          </button>
        </div>

        <div className="signup-link">
          Don't have an account? <p>Sign up</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPartial;