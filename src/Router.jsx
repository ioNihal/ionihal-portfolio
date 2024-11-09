
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import App from './App';


function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />

    </Switch>
  );
}

export default AppRouter;
