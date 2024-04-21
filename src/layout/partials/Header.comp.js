// headercomp.js

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assests/img/logo.jpg";

export const Header = () => {
  const linkStyle = {
    color: "rgba(255, 229, 153, 1)",
    padding: "10px 15px",
    marginRight: "10px",
  };

  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: "rgba(12, 52, 61, 1)" }}>
      <Navbar.Brand>
        <img src={logo} alt="logo" width="60px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard" style={linkStyle}>Dashboard</Nav.Link>
          <Nav.Link href="/tickets" style={linkStyle}>Tickets</Nav.Link>
          <Nav.Link href="/logout" style={linkStyle}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
