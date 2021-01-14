import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './common/assets/styles/body.css'
import "bootstrap/dist/css/bootstrap.css";

import LandingPage from './common/components/LandingPage';
import Restaurants from './common/components/Restaurants';
import { ApiDataProvider } from './context/apiDataContex';

function App() {
  return (
    <ApiDataProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/restaurants" component={Restaurants} />
        
      </Switch>
    </Router>
    </ApiDataProvider>
  );
}

export default App;
