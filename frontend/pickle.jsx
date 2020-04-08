import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import { signup, login, logout } from './util/session_api_util';
// TESTING

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  if (window.currentMember) {
    preloadedState = {
      entities: {
        members: { [window.currentMember.id]: window.currentMember }
      },
      session: { currentMemberId: window.currentMember.id }
    };
    delete window.currentMember;
  };
  const store = configureStore(preloadedState);
  
  // TESTING
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING

  ReactDOM.render(<Root store={store} />, root);
});