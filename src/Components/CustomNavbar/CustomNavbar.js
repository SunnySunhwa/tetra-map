import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CustomNavbar extends Component {


  render() {
    return (
            <nav className="outer-nav right vertical">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </nav>

    )
  }
}

export default CustomNavbar;