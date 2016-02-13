'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

//let DefaultRoute = Router.defaultRoute;

export default (
  <Router>
    <Route path="/" component={Main}>
      <Route path="profile/:userName" component={Profile} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
