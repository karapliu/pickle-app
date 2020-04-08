import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentMember, logout }) => {
  const navLinksClass = () => {
    if (location.hash === "#/") {
      return "links-white"
    } else {
      return "nav-links"
    }
  };

  const sessionLinks = () => (
    <div className="session-links">
      <Link className={navLinksClass()} to="/signup">Sign Up</Link>
      <Link className={navLinksClass()} to="/signin">Sign In</Link>
      <Link className={navLinksClass()} to="/"><i className="far fa-question-circle"></i> Help</Link>
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