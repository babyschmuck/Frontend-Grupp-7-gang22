import React, { useState } from "react";
import { handleRegister } from "../../scripts/auth/authAPI";

const RegisterPartial = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(e);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Create Account</h2>
      <p>Sign up to get started!</p>

      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <input type="text" className="form-control" id="firstName" placeholder="Enter name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
      </div>

      <div className="form-group">
        <label htmlFor="name">Last Name</label>
        <input type="text" className="form-control" id="lastName" placeholder="Enter name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="phoneNumber" className="form-control" id="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </div>


      <button type="submit" className="btn btn-theme">
        SIGN UP
      </button>

      <div className="signup-link">
        Already have an account? <p>Sign in</p>
      </div>
    </form>
  );
};

export default RegisterPartial;
