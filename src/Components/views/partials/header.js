import React, { Component } from 'react';

class Header extends Component { 

  render() {

    return (
      <header class="header">
            <a class="header--logo" href="/index.html">
              <p>TetraMap</p>
            </a>
            <div class="header--nav-toggle">
              <span></span>
            </div>
          </header>
    );
  }
}

export default Header;
