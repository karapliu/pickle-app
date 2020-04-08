import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  navLinksClass() {
    if (location.hash === "#/") {
      return "links-white"
    } else {
      return "nav-links"
    }
  };

  render() {
    const { currentMember, logout } = this.props;

    const sessionLinks = () => (
      <div className="session-links">
        <Link className={this.navLinksClass()} to="/signup">Sign Up</Link>
        <Link className={this.navLinksClass()} to="/signin">Sign In</Link>
        <Link className={this.navLinksClass()} to="/"><i className="far fa-question-circle"></i> Help</Link>
      </div>
    );

    const loggedIn = () => (
      <div>
      <h4>{currentMember.first_name}</h4>
      <button onClick={logout}>Sign out</button>
      </div>
    );

    return currentMember ? loggedIn() : sessionLinks();
  }
};

export default NavBar;