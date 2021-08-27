import React from 'react';
import SigninManager from '../../authentication';
import { isKeycloakProvider } from '$utils/env';

export interface RRenderOnAuthenticatedProps {
  children: React.ReactElement;
}

const RenderOnAuthenticated = ({ children }: RRenderOnAuthenticatedProps) => {
  if (!isKeycloakProvider()) {
    return children;
  }

  return SigninManager.isLoggedIn() ? children : null;
};

export default RenderOnAuthenticated;
