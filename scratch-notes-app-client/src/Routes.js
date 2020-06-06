import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './containers/Home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
