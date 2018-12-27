import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './views/partials/header';
import Nav from './views/partials/nav';
import Main from './views/main';
import AboutUs from './views/about-us';
import dummy from '../dummy_data.json';
import '../css/App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: dummy
    };
  }

  render() {
    return (
      <div class="perspective effect-rotate-left">
      <div class="container">
        <div class="outer-nav--return"></div>
        <div id="viewport" class="l-viewport">
          <div class="l-wrapper">
          <Header />
          </div>
        </div>
      </div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about-us" component={AboutUs} />
      </Switch>
    </div>
    );
  }
}

export default App;
