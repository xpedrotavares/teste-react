import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './common/assets/styles/body.css'
import "bootstrap/dist/css/bootstrap.css";

import LandingPage from './common/components/LandingPage'
import Restaurants from './common/components/Restaurants';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/restaurants" component={Restaurants} />
        
      </Switch>
    </Router>
  );
}

export default App;
