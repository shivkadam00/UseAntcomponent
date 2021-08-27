import React from 'react';
import SigninManager from '../../authentication';

export interface RRenderOnAuthenticatedProps {
  children: React.ReactElement;
}

const RenderOnAuthenticated = ({ children }: RRenderOnAuthenticatedProps) => {
  if (!SigninManager.isKeycloakProvider()) {
    return children;
  }

  return SigninManager.isLoggedIn() ? children : null;
};

export default RenderOnAuthenticated;
