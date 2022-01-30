import React, { Component } from 'react';
import {
  Jumbotron,
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div class='Header'>
        <Jumbotron fluid className='my-0'>
          <h1 className='text-white offset-md-1 display-3 text-md-left text-center'>
            Covid-19 Tracker
          </h1>
          <p className='text-light offset-md-1 lead pl-2 d-none d-md-block '>
            Keep safe with reliable information in real time
          </p>
        </Jumbotron>
        <Navbar expand='md' className='main-color'>
          <div className='container'>
            <NavbarBrand href='/'>
              <h2 className='text-color'>
                <i>ZM</i>
              </h2>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href='/' className='text-color selected-color mx-2'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/' className='text-color mx-2'>
                    Stats
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/' className='text-color mx-2'>
                    Countries
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <NavbarText>
              <Button
                className='btn btn-sm px-3 btn-register btn-purple ml-5'
                type='button'
                onClick={this.modalToggle}
              >
                Register
              </Button>
            </NavbarText>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
