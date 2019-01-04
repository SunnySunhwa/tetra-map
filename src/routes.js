import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Main from './Components/Main'
import AboutUs from './Components/AboutUs'
import Login from './Components/Login'


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/login" component={Login}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;