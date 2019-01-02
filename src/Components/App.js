import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavbar from './views/CustomNavbar';
import Main from './views/Main';
import AboutUs from './views/AboutUs';
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
      <div className="perspective effect-rotate-left">
      <div className="container">
        <div className="outer-nav--return"></div>
        <div id="viewport" className="l-viewport">
          <div className="l-wrapper">
          <Router>
            <div>
              <CustomNavbar />
              <Route exact path="/" component={Main} />
              <Route path="/aboutus" component={AboutUs} />
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
