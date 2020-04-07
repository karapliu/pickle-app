import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <>
    <header className="header">
      <nav className="nav-bar">
        <div className="left-nav">
          <h1 className="title"><Link to="/">Pickle</Link></h1>
          <Link className="nav-links" to="/"><i className="far fa-question-circle"></i> Search Sitters</Link>
          <Link className="nav-links" to="/signup"><i className="far fa-heart"></i> Become a Sitter</Link>
        </div>
        <NavBarContainer />
      </nav>
    </header>

    <Route path="/signup" component={SignUpFormContainer} />
    <Route path="/signin" component={SignInFormContainer} />
  </>
);

export default App;