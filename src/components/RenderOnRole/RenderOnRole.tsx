import React from 'react';
import SigninManager from './../../authentication';

export interface RenderOnRoleProps {
  roles: Array<string>;
  children: React.ReactElement;
}

const RenderOnRole = ({ roles, children }: RenderOnRoleProps) => {
  return SigninManager.isKeycloakProvider() && SigninManager.hasRole(roles)
    ? children
    : null;
};

export default RenderOnRole;
