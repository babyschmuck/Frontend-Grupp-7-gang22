import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderPartial from '../partials/HeaderPartial';
import LoginPartial from '../partials/LogInPartial';
import RegisterPartial from '../partials/RegisterPartial';

const Account = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  /*const handleLoginClick = () => {
    setShowLogin(true);
    
  }

  const handleRegisterClick = () => {
    setShowRegister(true);
  } */

  return (
    <>
      <HeaderPartial />
      <div className="account">
        <Link to="/login" className="login-link">Log In</Link>
        <Link to="/register" className="register-link">Register</Link>
      </div>
      {showLogin && <LoginPartial />}
      {showRegister && <RegisterPartial />}
    </>
  );
};

export default Account;
