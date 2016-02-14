'use strict';

import React from 'react';
import { Router, Route, IndexRoute, History } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

export default (
  <Router>
    <Route path="/" component={Main}>
      <Route path="profile/:userName" component={Profile} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
