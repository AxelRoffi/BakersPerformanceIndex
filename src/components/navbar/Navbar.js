import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const navbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">BAKERS PERFORMANCE INDEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link style={{ color: 'white' }} href="/about-us">ABOUT US</Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/contact">CONTACT</Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/our-offer">BAKING SERVICE? OUR OFFER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  )
}

export default navbar;





