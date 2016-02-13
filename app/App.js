'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import routes from './config/routes';

render(
  routes,
  document.querySelector('#app')
);
