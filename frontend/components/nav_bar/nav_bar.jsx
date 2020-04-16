import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

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
      <>
        <div className="logged-in-links">
          <Dropdown logout={logout} currentMember={currentMember} navLinksclassName={this.navLinksClass} />
        </div>
      </>
    );

    return currentMember ? loggedIn() : sessionLinks();
  }
};

export default NavBar;