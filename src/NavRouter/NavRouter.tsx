import { Redirect, Route, Switch } from 'react-router-dom';

import { PATH_NOT_FOUND } from '$utils/paths';
import { PageNotFound } from '../pages';
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
      <Route path={PATH_NOT_FOUND} component={PageNotFound} />
      <Redirect path="*" to={PATH_NOT_FOUND} />
    </Switch>
  );
};

export default NavRouter;
