import 'core-js/fn/object/assign';
import 'promise-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import rootRoutes from './config/rootRoutes';

// Render the main component into the dom
ReactDOM.render(
  <Router history={hashHistory} routes={rootRoutes} />,
  document.getElementById('app')
);
