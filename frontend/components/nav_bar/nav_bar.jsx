import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentMember, logout }) => {
  const sessionLinks = () => (
    <div className="session-links">
      <Link className="nav-links" to="/signup">Sign Up</Link>
      <Link className="nav-links" to="/signin">Sign In</Link>
      <Link className="nav-links" to="/"><i className="far fa-question-circle"></i> Help</Link>
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