import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Nav default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">TetraMap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/login">
              Login
            </NavItem>
            <NavItem eventKey={3} href="/signup">
              Signup
            </NavItem>
            <NavItem eventKey={4} href="/aboutus">
              AboutUs
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Nav>
    )
  }
}
