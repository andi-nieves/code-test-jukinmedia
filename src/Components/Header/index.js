import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Style.css";
import Logo from "../../Assets/Images/logo.svg";

function Component(props) {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className="top-navbar">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
      <div className="container-fluid">
        <Navbar.Collapse>
          <Nav className="mr-auto hidden-xs">
            <a href="#home">License Videos</a>
            <a href="#link">Submit Videos</a>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="top-search">
        <form
          className="search-form"
          method="GET"
          action="https://www.jukinmedia.com/licensing/search"
          autoComplete="off"
        >
          <input
            className="search-input"
            type="search"
            name="q"
            placeholder="Enter video URL or keyword"
          />
          <button type="submit" className="search-action">
            Search
          </button>
        </form>
      </div>
    </Navbar>
  );
}

export default Component;
