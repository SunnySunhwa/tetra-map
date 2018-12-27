import React, { Component } from 'react';
import Header from './Components/views/partials/header';
import Nav from './Components/views/partials/nav';
import './App.scss';

class App extends Component {
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
    </div>
    );
  }
}

export default App;
