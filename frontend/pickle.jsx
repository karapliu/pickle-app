import React from 'react';
import ReactDOM from 'react-dom';

// TESTING
import { signup, login, logout } from './util/session_api_util';
// TESTING

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // TESTING
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // TESTING

  ReactDOM.render(<h1>Pickle!</h1>, root);
});