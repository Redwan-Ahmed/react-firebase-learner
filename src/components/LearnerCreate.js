import React, { useState, useEffect } from "react";
import { Form, Container, Button, Col, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const LearnerCreate = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [score, setScore] = useState();

  useEffect(() => {
    console.log("Fname", firstName);
    console.log("Lname", lastName);
    console.log("Email", email);
    console.log("Score", score);
  }, [firstName, lastName, email, score]);

  return (
    <Container>
        <h1 className="text-center" style={{marginTop: "15px", marginBottom: "15px"}}>Create new Learner</h1>
      <Form>
        <Form.Group as={Row} controlId="form.ControlInputFirstName">
          <Form.Label column sm={1}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="form.ControlInputLastName">
          <Form.Label column sm={1}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="form.ControlInputEmail">
          <Form.Label column sm={1}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="form.ControlSelectScore">
          <Form.Label column sm={1}>
            Score
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              as="select"
              onChange={(e) => setScore(e.target.value)}
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 1 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LearnerCreate;
