import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Main from './Components/Main/Main'
import AboutUs from './Components/AboutUs/AboutUs'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;