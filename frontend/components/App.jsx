import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => {
  const headerClass = () => {
    if (location.hash=== "#/" ) {
      return "header home"
    } else {
      return "header"
    }
  };

  return(
    <>
      <header className={headerClass()}>
        <nav className="nav-bar">
          <div className="left-nav">
            <h1 className="title"><Link to="/">Pickle</Link></h1>
            <Link className="nav-links" to="/"><i className="far fa-question-circle"></i> Search Sitters</Link>
            <Link className="nav-links" to="/signup"><i className="far fa-heart"></i> Become a Sitter</Link>
          </div>
          <NavBarContainer />
        </nav>
      </header>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/signin" component={SignInFormContainer} />
      </Switch>
    </>
  )
};

export default App;