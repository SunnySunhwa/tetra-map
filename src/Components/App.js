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
      <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

        <div className="off-canvas-content" data-off-canvas-content>
        <Router>
          <div>
            <CustomNavbar name={this.state.appName}/>
            <Routes name={this.state.appName}/>
          </div>
        </Router>
          <hr/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
