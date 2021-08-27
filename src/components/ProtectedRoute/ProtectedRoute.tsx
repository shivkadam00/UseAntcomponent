import NotAllowed from '$components/NoMatch';
import React from 'react';
import { Route } from 'react-router-dom';
import SigninManager from './../../authentication';
import { isKeycloakProvider } from '$utils/env';

export interface ProtectedRouteProps {
  roles: Array<string>;
  children: React.ReactElement;
  [x: string]: any;
}

const ProtectedRoute = ({ roles, children, ...rest }: ProtectedRouteProps) => {
  return (
    <Route {...rest}>
      {!isKeycloakProvider() && children}

      {isKeycloakProvider() && SigninManager.hasRole(roles) ? (
        children
      ) : (
        <NotAllowed />
      )}
    </Route>
  );
};

export default ProtectedRoute;
