import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';

global.time = [];
global.temp = [];
global.press = [];
global.flow = [];
global.consumption = [];

const App = () => (
  <Switch>
    {routes.map(route => (
      <Route exact key={route.path} path={route.path} render={props => <route.component {...props} />} />
    ))}
  </Switch>
);

export default App;
