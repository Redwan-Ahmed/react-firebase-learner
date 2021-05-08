import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { Table, Container, Button } from "react-bootstrap";

const LearnerList = () => {
  // declaring my use states
  const [learners, setLearners] = useState([]);
  const [averageScore, setAverageScore] = useState(0);
  const [loading, setLoading] = useState(false);

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
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{learner.firstName}</td>
              <td>{learner.lastName}</td>
              <td>{learner.email}</td>
              <td>
                <Button variant="primary">View</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });

  return (
    <div>
      <Container>
        <h1 className="text-center" style={{margin: "5px"}}>Learner List</h1>
        <h4>Average Learner Score: {averageScore}</h4>
        <hr></hr>
        <div>{learnerList}</div>
      </Container>
    </div>
  );
};

export default LearnerList;
