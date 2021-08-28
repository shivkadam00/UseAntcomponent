import React from 'react';
import SigninManager from './../../authentication';
import { isKeycloakProvider } from '$utils/env';

export interface RenderOnRoleProps {
  roles: Array<string>;
  children: React.ReactElement;
}

const RenderOnRole = ({ roles, children }: RenderOnRoleProps) => {
  if (!isKeycloakProvider()) {
    return children;
  }

  return SigninManager.hasRole(roles) ? children : null;
};

export default RenderOnRole;
