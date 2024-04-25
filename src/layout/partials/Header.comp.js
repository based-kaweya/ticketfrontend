import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assests/img/logo.jpg";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate("/");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      style={{ backgroundColor: "rgba(12, 52, 61, 1)" }}
    >
      <Navbar.Brand>
        <img src={logo} alt="logo" width="60px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/ticket-lists">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
