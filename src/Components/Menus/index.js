import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Style.css";

function Component() {
  return (
    <Navbar
      collapseOnSelect
      className="main-menu"
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">The Wire</Nav.Link>
          <Nav.Link href="https://www.jukinmedia.com/why-work-with-jukin">
            Why Work with Jukin?
          </Nav.Link>
          <NavDropdown title="About Us" className="menu-dropdown">
            <NavDropdown.Item href="https://www.jukinmedia.com/corporate">
              Corporate
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.jukinmedia.com/our-team">
              Our Team
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.jukinmedia.com/our-work">
              Our Work
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.jukinmedia.com/careers">
              Careers
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.jukinmedia.com/press">
              Press
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://www.jukinmedia.com/corporate">
            For Advertisers
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.jukinmedia.com/contact-us">
            <span className="contact">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            Contact Us
          </Nav.Link>
          <Nav.Link href="https://www.jukinmedia.com/thewire#">
            <span className="login">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            Login / Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Component;
