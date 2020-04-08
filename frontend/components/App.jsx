import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Footer from './footer';

const App = (props) => {
  // now you can check out props to access route information.
  const headerClass = () => {
    if (location.hash=== "#/" ) {
      return "header"
    } else {
      return "header shown"
    }
  };

  const titleClass = () => {
    if (location.hash === "#/") {
      return "title-white"
    } else {
      return "title"
    }
  };

  const navLinksClass = () => {
    if (location.hash === "#/") {
      return "links-white"
    } else {
      return "nav-links"
    }
  };

  return(
    <>
      <header className={headerClass()}>
        <nav className="nav-bar">
          <div className="left-nav">
            <h1 className={titleClass()}><Link to="/">Pickle</Link></h1>
            <Link className={navLinksClass()} to="/"><i className="far fa-question-circle"></i> Search Sitters</Link>
            <Link className={navLinksClass()} to="/signup"><i className="far fa-heart"></i> Become a Sitter</Link>
          </div>
          <NavBarContainer />
        </nav>
      </header>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/signin" component={SignInFormContainer} />
      </Switch>

      <Footer />
    </>
  )
};

export default App;