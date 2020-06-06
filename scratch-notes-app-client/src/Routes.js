import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
