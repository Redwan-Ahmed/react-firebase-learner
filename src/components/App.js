import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LearnerList from './LearnerList';
import LearnerCreate from './LearnerCreate';
import Header from './Header';

function App () {

    return (
        <div>
            <BrowserRouter>
            <Header />
            <Route path="/" exact component={LearnerList} />
            <Route path="/learner/new" exact component={LearnerCreate} />
            </BrowserRouter>
        </div>
    );
}

export default App;

