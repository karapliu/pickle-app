import React from 'react';
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(e) {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu)
    });
  }

  render() {
    const { currentMember, navLinksClass, logout } = this.props;
    return (
      <>
        { this.state.showMenu ? (
          <>
          <div className="menu" ref ={(element) => {
            this.dropdownMenu = element;
          }}>
          <button onClick={this.showMenu} className={this.state.showMenu ? "drop-click-on" : "drop-click"}>
            <img className="avatar" src={currentMember.photoUrl} />&nbsp;
              <div>{currentMember.first_name}&nbsp;&nbsp;&#9662;</div>
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-left">
                <h4 className="dropdown-h4">Your Guinea Pigs</h4>
            </div>
            <div className="dropdown-right">
              <div className="dropdown-links">
                <Link to="/account">Dashboard</Link>
                <Link to={`/members/${currentMember.id}`}>Profile</Link>
              </div>
              <button onClick={logout}>Log out</button>
            </div>
          </div>
          </div>
          </>
        ) : (
            <button onClick={this.showMenu} className="drop-click">
              <img className="avatar" src={currentMember.photoUrl} />&nbsp;
              <div className={navLinksClass()}>{currentMember.first_name}&nbsp;&nbsp;&#9662;</div>
            </button>
        )}
      </>
    )
  }
}

export default Dropdown;