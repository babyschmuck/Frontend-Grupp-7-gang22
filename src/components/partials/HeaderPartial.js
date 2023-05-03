import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderPartial = () => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <header>
      <div className="container">
        <Link id="logotype" to="/">
          Manero.
        </Link>
        <div id="menu" className={`menu ${hideMenu ? 'hide' : ''}`}>
          <nav className="menu-icons icons">
            <NavLink className="link" to="/search"><i className="fa-regular fa-search"></i></NavLink>
            <NavLink className="link" to="/favorites"><i className="fa-regular fa-heart"></i></NavLink>
            <NavLink className="link" to="/cart"><i className="fa-regular fa-bag-shopping"></i></NavLink>
            <NavLink className="link ms-5" to="/account"><i className="fa-regular fa-user"></i></NavLink>
          </nav>
        </div>
        <div id="toggle-icon" className="icons">
          <button onClick={() => setHideMenu(!hideMenu)} className="link">
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderPartial;