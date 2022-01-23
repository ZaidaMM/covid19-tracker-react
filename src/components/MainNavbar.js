import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from 'reactstrap';
import Modal from 'reactstrap/lib/Modal';

class MainNavbar extends Component {
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
      <div className='main-color'>
        <Navbar className='main-color mx-3' dark expand='md' full>
          <NavbarBrand href='/'>
            <h1>ZM</h1>
          </NavbarBrand>
          <NavbarToggler className='me-2' onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mx-auto' navbar>
              <NavItem className='mx-2'>
                <NavLink href='/' className='text-white selected'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink href='/' className='text-white'>
                  About
                </NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink href='/' className='text-white'>
                  Stats
                </NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink href='/' className='text-white'>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Button
                class='btn btn-sm px-3 btn-register btn-purple'
                type='button'
                data-toggle='modal'
                data-target='#registerForm'
                onClick={function noRefCheck() {}}
              >
                Register
              </Button>
            </NavbarText>
            <Modal></Modal>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNavbar;
