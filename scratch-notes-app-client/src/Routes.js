import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './containers/Home';
import NotFound from './containers/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
