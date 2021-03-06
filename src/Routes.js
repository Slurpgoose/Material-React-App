/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/pages/Home/';
import ErrorPage from 'src/pages/Error/';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" render={(props) => <Home {...props} />} />
    <Route path="*">
      <ErrorPage />
    </Route>
  </Switch>
);

export default Routes;
