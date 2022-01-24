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
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  ButtonGroup,
} from 'reactstrap';

class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.navToggle = this.navToggle.bind(this);
    this.modalToggle = this.modalToggle.bind(this);

    this.state = {
      isOpen: false,
      modal: false,
    };
  }

  navToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  modalToggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className='main-color'>
        <Navbar className='main-color mx-3' dark expand='md' full>
          <NavbarBrand href='/'>
            <span className='h2'>
              <i>ZM</i>
            </span>
          </NavbarBrand>
          <NavbarToggler className='me-2' onClick={this.navToggle} />
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
                className='btn btn-sm px-3 btn-register btn-purple'
                type='button'
                onClick={this.modalToggle}
              >
                Register
              </Button>
            </NavbarText>
            <Modal isOpen={this.state.modal} toggle={this.modalToggle}>
              <ModalHeader>
                <h5 className='lead'>Register for Updates</h5>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input
                      id='name'
                      type='text'
                      placeholder='Enter your name...'
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Enter your email...'
                    ></Input>
                  </FormGroup>
                  <ButtonGroup>
                    <Button>Cancel</Button>
                    <Button color='primary'>Submit</Button>
                  </ButtonGroup>
                </Form>
              </ModalBody>
            </Modal>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNavbar;
