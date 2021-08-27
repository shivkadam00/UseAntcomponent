import { ADMIN_PATH, ADMIN_ROLE, PATH_NOT_FOUND } from '$utils/paths';
import { Admin, PageNotFound } from '../pages';
import { Redirect, Route, Switch } from 'react-router-dom';

import ProtectedRoute from '$components/ProtectedRoute';
import React from 'react';
import { routes } from './Routes';

const NavRouter = () => {
  return (
    <div>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
        <ProtectedRoute roles={[ADMIN_ROLE]} path={ADMIN_PATH}>
          <Admin />
        </ProtectedRoute>
        <Route path={PATH_NOT_FOUND} component={PageNotFound} />
        <Redirect path="*" to={PATH_NOT_FOUND} />
      </Switch>
    </div>
  );
};

export default NavRouter;
