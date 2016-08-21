import '../index.html';
import '../css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MainLayout from './layouts/main';
import CatalogLayout from './layouts/catalog';
import AnotherLayout from './layouts/another';

const reactApp = document.querySelector('#reactApp');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={CatalogLayout}></IndexRoute>
      <Route component={AnotherLayout} name="another" path="another"></Route>
    </Route>
  </Router>
  , reactApp);