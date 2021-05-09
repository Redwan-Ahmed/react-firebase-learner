import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import {
  Table,
  Container,
  Button,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./LearnerList.css";

const LearnerList = () => {
  // declaring my use states
  const [learners, setLearners] = useState([]);
  const [averageScore, setAverageScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const [view, setView] = useState(false);
  const [editView, setEditView] = useState(false);
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
  }, []);

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
                <Button
                  variant="primary"
                  style={{ margin: "5px" }}
                  onClick={() => editLearnerView(learner)}
                >
                  Edit
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
    setEditView(false);
  };

  const editLearnerView = (e) => {
    console.log(e);
    setEditView(true);
    setFirstName(e.firstName);
    setLastName(e.lastName);
    setEmail(e.email);
    setScore(e.score);
    setId(e.id);
  };

  const editLearner = () => {
    const updatedLearner = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      score: parseInt(score)
    };

    ref.doc(id).update(updatedLearner).then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
  }

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
                <Card.Title>
                  {firstName} {lastName}
                </Card.Title>
                <Card.Subtitle className="text-muted">Email: {email}</Card.Subtitle>
                <Card.Body>
                  <Card.Text>Score: {score}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ) : null}
        </div>
        <div>
          {editView ? (
            <Card className="Absolute-Center-Edit is-Fixed">
              <Button
                className="ms-auto btn-close"
                onClick={() => closeView()}
              ></Button>
              <Card.Title className="text-center">Edit Learner</Card.Title>
              <Card.Body>
                <label htmlFor="First Name">First Name</label>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="First Name"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </InputGroup>
                <label htmlFor="Last Name">Last Name</label>

                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="Last Name"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </InputGroup>

                <label htmlFor="Email">Email</label>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="Email"
                    aria-describedby="inputGroup-sizing-sm"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>

                <label htmlFor="score">Score</label>
                <select
                  className="form-select"
                  id="score"
                  type="number"
                  defaultValue={score}
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
                </select>
              </Card.Body>
              <Card.Footer className="text-muted">
                <div className="text-center">
                <Button variant="primary" onClick={() => editLearner()}>Submit</Button>
                </div>
              </Card.Footer>
            </Card>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default LearnerList;
