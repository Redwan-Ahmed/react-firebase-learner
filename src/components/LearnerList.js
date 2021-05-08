import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { Table, Container, Button, Alert, Card } from "react-bootstrap";
import "./LearnerList.css";

const LearnerList = () => {
  // declaring my use states
  const [learners, setLearners] = useState([]);
  const [averageScore, setAverageScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const [view, setView] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [score, setScore] = useState();
  const [id, setId] = useState();

  const ref = firebase.firestore().collection("learners");

  function getLearners() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setLearners(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getLearners();
    calculateAverageScore();
  }, [view]);

  const calculateAverageScore = () => {
    ref.onSnapshot((querySnapshot) => {
      let sum = 0;
      querySnapshot.forEach((doc) => {
        sum += doc.data().score;
      });
      let average = sum / querySnapshot.size;
      setAverageScore(average);
    });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const learnerList = learners.map((learner) => {
    return (
      <div key={learner.email}>
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{ tableLayout: "fixed", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="First Name">{learner.firstName}</td>
              <td data-label="Last Name">{learner.lastName}</td>
              <td data-label="Email">{learner.email}</td>
              <td data-label="">
                <Button variant="primary" onClick={() => viewLearner(learner)}>
                  View
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });

  const viewLearner = (e) => {
    console.log(e);
    setView(true);
    setFirstName(e.firstName);
    setLastName(e.lastName);
    setEmail(e.email);
    setScore(e.score);
    setId(e.id);
  };

  const closeView = () => {
    setView(false);
  };

  return (
    <div>
      <Container>
        <h1 className="text-center" style={{ margin: "5px" }}>
          Learner List
        </h1>
        <h4>Average Learner Score: {averageScore}</h4>
        <hr></hr>
        <div>{learnerList}</div>
        <div>
          {view ? (
            <div>
              <Card className="Absolute-Center is-Fixed text-center">
                <Button
                  className="ms-auto btn-close"
                  onClick={() => closeView()}
                ></Button>
                <Card.Title>{firstName} {lastName}</Card.Title>
                <Card.Subtitle className="text-muted">{email}</Card.Subtitle>
                <Card.Body>
                  <Card.Text>Score: {score}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default LearnerList;
