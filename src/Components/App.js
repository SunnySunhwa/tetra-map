import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import dummy from '../dummy_data.json';
import Routes from '../routes';
import '../css/App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      appName: "TetraMap",
      user: dummy
    };
  }

  render() {
    return (
    <div className="perspective effect-rotate-left">
      <div className="container">
        <div className="outer-nav--return"></div>
        <div id="viewport" className="l-viewport">
          <div className="l-wrapper">
            <header className="header">
              <a className="header--logo" href="/">
                <p>TetraMap</p>
              </a>
              <div className="header--nav-toggle">
                <span></span>
              </div>
            </header>
            <Router>
              <div>
                <CustomNavbar/>
                <Routes/>
              </div>
            </Router>
          </div>
        </div>
      </div>
       
    </div>
    );
  }
}

export default App;
