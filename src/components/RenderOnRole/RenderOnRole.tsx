import React from 'react';
import SigninManager from './../../authentication';

export interface RenderOnRoleProps {
  roles: Array<string>;
  children: React.ReactElement;
}

const RenderOnRole = ({ roles, children }: RenderOnRoleProps) => {
  if (!SigninManager.isKeycloakProvider()) {
    return children;
  }

  return SigninManager.hasRole(roles) ? children : null;
};

export default RenderOnRole;
