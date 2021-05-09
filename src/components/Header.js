import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AuthContext } from "../auth/Auth";
import firebase from "../firebase";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useContext(AuthContext);

  console.log(isSignedIn);

  const logOut = () => {
    firebase.auth().signOut();
    setIsSignedIn(false);
    console.log("logout", isSignedIn);
  };

  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="light"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <LinkContainer to="/">
        <Navbar.Brand className="navbar-brand mb-0 h1">
          Learner App
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {isSignedIn ? (
            <LinkContainer to="/learner/new">
              <Nav.Link>Create Learner</Nav.Link>
            </LinkContainer>
          ) : null}
        </Nav>
        <Nav>
          {isSignedIn ? (
            <Nav.Link onClick={logOut}>Logout</Nav.Link>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
          {isSignedIn ? null : (
            <LinkContainer to="/signup">
              <Button variant="success">Sign up</Button>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
