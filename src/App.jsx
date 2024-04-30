import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './aboutme/page.jsx'; // Adjust the import path as necessary
import './styles/App.css';

const App = () => {
 return (
    <Router>
      <Switch>
        <Route path="/aboutme" component={AboutMe} />
      </Switch>
    </Router>
 );
};

export default App;
