import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'

function Header() {
    return <header>
        <Navbar bg="dark" variant = "dark" expand="lg">
            <Container>
            <Navbar.Brand href="/">Dhakatopi</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
      <Nav.Link href="/login"><i className="fas fa-user"></i>Sing In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
            </Container>
</Navbar>
    </header>
}

export default Header
