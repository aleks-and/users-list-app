import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UsersList from './components/UsersList/UsersList';

const App = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={UsersList}
    />
  </Switch>
);

export default App;
