import '../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MainLayout from './mainLayout';
import CatalogLayout from './catalogLayout';

const reactApp = document.querySelector('#reactApp');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={CatalogLayout}></IndexRoute>
    </Route>
  </Router>
  , reactApp);