import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserHomePageContainer from './user_home_page/user_homepage_container';

//should change homepage file later on,
import HomePageContainer from './homepage/home_page';
import UserHomePage from './user_home_page/user_homepage';
// check back
import NavBar from './nav_bar/nav_bar';

const App = () => {
  return (
    <div>
      
      <header>
        <ProtectedRoute path='/' component={NavBar} />
      </header>
      <div className="divname"></div>
      <AuthRoute exact path="/login"  component={GreetingContainer} />
      <AuthRoute  exact path='/' component={GreetingContainer} />
      <ProtectedRoute exact path='/homepage' component={HomePageContainer} />
      <ProtectedRoute exact path='/homepage/:username/:userId' component={UserHomePageContainer} />
    </div>
  );
}

export default App;
