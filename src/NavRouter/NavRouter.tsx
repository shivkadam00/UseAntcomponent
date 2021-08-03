import { Route, Switch } from 'react-router-dom';

import React from 'react';
import { routes } from './Routes';

const NavRouter = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={<route.main />}
        />
      ))}
    </Switch>
  );
};

export default NavRouter;
