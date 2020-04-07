import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <>
    <nav className="nav-bar">
      <h1 className="title"><Link to="/">Pickle</Link></h1>
      <NavBarContainer />
    </nav>

    <Route path="/signup" component={SignUpFormContainer} />
    <Route path="/signin" component={SignInFormContainer} />
  </>
);

export default App;