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
      <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginTop: 0 }}>
        Sign In
      </h2>
      <p style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Welcome back!</p>
      <p style={{ color: "#ced4da", marginBottom: "2rem" }}>
        Sign in to continue
      </p>

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
          style={{ borderRadius: "1.5rem" }}
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
          style={{ borderRadius: "1.5rem" }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          style={{ marginRight: "0.5rem" }}
        />
        <label className="rememberMe" htmlFor="remember-me" style={{ fontWeight: 500 }}>
          Remember me
        </label>
        <a style={{ marginLeft: "auto", fontWeight: 500 }}>
          Forgot password?
        </a>
      </div>
<div className="center">
      <button type="submit" className="btn btn-theme">
        <i className="fas fa-sign-in-alt"></i> SIGN IN
      </button>
      </div>
      <div className="signup-link">
        Don't have an account? <a>Sign up</a>
      </div>
    </form>
    </div>
  );
};

export default LoginPartial;
