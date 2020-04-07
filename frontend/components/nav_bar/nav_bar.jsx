import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentMember, logout }) => {
  const sessionLinks = () => (
    <div className="session-links">
      <Link to="/signup">Sign up</Link>
      <Link to="/signin">Sign in</Link>
    </div>
  );

  const loggedIn = () => (
    <div>
    <h4>{currentMember.first_name}</h4>
    <button onClick={logout}>Sign out</button>
    </div>
  );

  return currentMember ? loggedIn() : sessionLinks();
};

export default NavBar;