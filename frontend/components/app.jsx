import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
//should change homepage file later on,
import HomePageContainer from './homepage/home_page';
// check back


const App = () => (
  <div>
    <header>
      <AuthRoute exact path='/' component={GreetingContainer} />
    </header>
    <AuthRoute exact path="/signup" component={GreetingContainer} />
    <ProtectedRoute exact path='/homepage' component={HomePageContainer} />
  </div>
);

export default App;
