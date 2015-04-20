import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import AppHandler from './components/AppHandler';

let Routes = (
  <Route name="app" path="/" handler={AppHandler}>
  </Route>
);

export default Routes;
