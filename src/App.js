import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersList from './components/UsersList/UsersList';
import UserDetails from './components/UserDetails/UserDetails';

const App = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={UsersList}
    />
    <Route
      path="/user/:userId"
      exact
      component={UserDetails}
    />
  </Switch>
);

export default App;
