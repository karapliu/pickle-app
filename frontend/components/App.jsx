import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';

const App = () => (
  <>
    <h1>Pickle</h1>
    <Link to="/signup">Sign up</Link>
    <Link to="/login">Log in</Link>
    <Route path="/signup" component={SignUpFormContainer} />
    <Route path="/login" component={SignInFormContainer} />
  </>
);

export default App;