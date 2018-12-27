import React from 'react';
import { Link } from "react-router-dom";


const Nav = (props, context) => (
  <div className="navigation outer-nav right vertical">
    <div className="inner">
    {/* <li><a href="/">HOME</a></li> */}
      <Link to="/">Home</Link>
      <Link to="/about-us">About us</Link>
    </div>
  </div>
);

export default Nav;