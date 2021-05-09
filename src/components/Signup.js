import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import firebase from '../firebase';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const register = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, pw)
          .then(() => {
            resetInput();
          })
          .catch((err) => {
            console.error(err);
          });
      };

      const resetInput = () => {
        setEmail("");
        setPw("");
      };

  return (
    <div>
      <Container>
          <h1 className="text-center">Sign up</h1>
        <Form>
          <Form.Group controlId="formBasicEmail" style={{margin: "10px"}}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword" style={{margin: "10px"}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPw(e.target.value)}/>
            <Form.Text className="text-muted">
              Password length must be 6 characters minimum.
            </Form.Text>
          </Form.Group>
          <Button style={{margin: "10px"}} variant="primary" type="submit" onClick={register}>
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;