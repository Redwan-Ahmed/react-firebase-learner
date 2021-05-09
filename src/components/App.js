import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LearnerList from "./LearnerList";
import LearnerCreate from "./LearnerCreate";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import { AuthProvider } from "../auth/Auth";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={LearnerList} />
          <Route path="/learner/new" exact component={LearnerCreate} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
