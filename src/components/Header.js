import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" style={{paddingLeft: "10px", paddingRight: "10px"}}>
      <LinkContainer to="/">
        <Navbar.Brand className="navbar-brand mb-0 h1">Learner App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/learner/new">
            <Nav.Link>Create Learner</Nav.Link>
          </LinkContainer>
        </Nav>
        <Button variant="primary">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
