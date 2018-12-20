import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import './MyNavBar.css'

var styles = {
  backgroundColor: '#770AFA',
}


export default class MyNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
        <Navbar style={styles} expand="md">
          <NavbarBrand className="navbarcss" href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navbarcss" href="/components/">Organizations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbarcss" href="/">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbarcss" href="/">Sign Up</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="navbarcss" nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Donate
                  </DropdownItem>
                  <DropdownItem>
                   Charities For Organizations
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}