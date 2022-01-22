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
  render() {
    return (
      <div className='main-color'>
        <Navbar className='main-color mx-3 ' dark expand='md' full>
          <NavbarBrand href='/' className='align-middle'>
            <h1>ZM</h1>
          </NavbarBrand>
          <NavbarToggler className='me-2' onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className='mx-auto' navbar>
              <NavItem className='mx-2'>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink href='/'>About</NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink href='/'>Stats</NavLink>
              </NavItem>
              <NavItem className='mx-2'>
                <NavLink href='/'>Contact</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Button
                class='btn btn-sm px-3 btn-register'
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
