import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

// COMPONENTS
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import ProfileContainer from './profile/profile_container';
import Footer from './footer';
import AccountInfoContainer from './update_profile/account_info/account_info_container';
import DashboardContainer from './profile/dashboard_container';
import DetailsContainer from './update_profile/details/details_container';
import YourPhotosContainer from './update_profile/your_photos/your_photos_container';
import UpdateServicesContainer from './update_profile/services/update_services_container';
import UpdateYourPiggiesContainer from './update_profile/your_piggies/update_your_piggies_container';
import EditGuineaPigContainer from './update_profile/your_piggies/edit_guinea_pig_container';
import GuineaPigContainer from './guinea_pig/guinea_pig_container';
import SearchContainer from './search/search_container';

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
    const search = location.hash === "#/search" ? <><input className="nav-search" type="text" placeholder="Zip Code" /><button className="nav-search-submit" type="submit"><i className="fas fa-search"></i></button></> : <Link className={this.navLinksClass()} to="/search"><i className="fas fa-search"></i> Search Sitters</Link>;

    return (
    <>
      <header className={this.headerClass()}>
        <nav className="nav-bar">
          <div className="left-nav">
            <div className="main-logo"><Link to="/" title="Home"><img src={this.titleClass()} /></Link></div>
            {search}
            <Link className={this.navLinksClass()} to="/signup"><i className="far fa-heart"></i> Become a Sitter</Link>
          </div>
          <NavBarContainer />
        </nav>
      </header>

      <Switch>
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/signin" component={SignInFormContainer} />
        <Route exact path="/members/:memberId" component={ProfileContainer} />
        <ProtectedRoute exact path="/account" component={DashboardContainer} />
        <ProtectedRoute path="/account/profile/account-info" component={AccountInfoContainer} />
        <ProtectedRoute path="/account/profile/details" component={DetailsContainer} />
        <ProtectedRoute path="/account/profile/photo" component={YourPhotosContainer} />
        <ProtectedRoute path="/account/profile/services" component={UpdateServicesContainer} />
        <ProtectedRoute exact path="/account/profile/your-piggies" component={UpdateYourPiggiesContainer} />
        <ProtectedRoute path="/account/profile/your-piggies/:guineaPigId" component={EditGuineaPigContainer} />
        <ProtectedRoute path="/account/guinea-pigs/:guineaPigId" component={GuineaPigContainer} />
        <Route path="/search" component={SearchContainer} />
        <Route exact path="/" component={Home} />
      </Switch> 

      <Footer />
    </>
  )};
}

export default App;