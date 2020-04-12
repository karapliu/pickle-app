import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Footer from './footer';
import UpdateProfileFormContainer from './update_profile_form/update_profile_form_container';

class App extends React.Component {
  // now you can check out props to access route information.

  componentWillUpdate() {
    location.reload()
  }
  
  headerClass() {
    if (location.hash=== "#/" ) {
      return "header"
    } else {
      return "header shown"
    }
  };

  titleClass() {
    if (location.hash === "#/") {
      return window.pickle2
    } else {
      return window.pickle1
    }
  };

  navLinksClass() {
    if (location.hash === "#/") {
      return "links-white"
    } else {
      return "nav-links"
    }
  };

  render () {
    return (
    <>
      <header className={this.headerClass()}>
        <nav className="nav-bar">
          <div className="left-nav">
            <div className="main-logo"><Link to="/"><img src={this.titleClass()} /></Link></div>
              <Link className={this.navLinksClass()} to="/"><i className="fas fa-search"></i> Search Sitters</Link>
            <Link className={this.navLinksClass()} to="/signup"><i className="far fa-heart"></i> Become a Sitter</Link>
          </div>
          <NavBarContainer />
        </nav>
      </header>

      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/signin" component={SignInFormContainer} />
        <Route exact path="/members/:memberId" component={ProfileContainer} />
        <ProtectedRoute path="/account/profile/account-info" component={UpdateProfileFormContainer} />
        <Route exact path="/" component={Home} />
      </Switch> 

      <Footer />
    </>
  )};
}

export default App;