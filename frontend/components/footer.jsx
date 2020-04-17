import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="pickle-footer">
    <div className="footer-container">
      <div className="footer-left">
        <h3 className="footer-h3">Learn More</h3>
        <Link to="/">Github</Link>
        <Link to="/">LinkedIn</Link>
        <Link to="/">AngelList</Link>
      </div>
      {/* <div className="footer-right">
        <Link to="/signup"><button className="sign-up-button">Sign up!</button></Link> */}
      {/* </div> */}
    </div>
  </footer>
);

export default Footer;