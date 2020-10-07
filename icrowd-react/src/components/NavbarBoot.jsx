import React from 'react';
import '../css/Navbar.css';
import { Navbar, Button, Nav } from 'react-bootstrap';

function NavbarBoot() {
    return (<div><Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">ICrowdTask</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#howitworks">How it works</Nav.Link>
        <Nav.Link href="#requester">Requesters</Nav.Link>
        <Nav.Link href="#workers">Workers</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
      <Button href="#signinbutton">Sign In</Button>

    </Navbar.Collapse>
  </Navbar> </div>)
}

export default NavbarBoot;
