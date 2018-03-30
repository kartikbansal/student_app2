import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home.js';
import ClassStatistics from '../components/ClassStatistics.js';
import NotFound from '../components/NotFound.js';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/stats" component={ClassStatistics} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;