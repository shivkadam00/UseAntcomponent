import React from 'react';
import SigninManager from './../../authentication';
import { isKeycloakProvider } from '$utils/env';

export interface RenderOnAnonymousProps {
  children: React.ReactElement;
}

const RenderOnAnonymous = ({ children }: RenderOnAnonymousProps) => {
  if (!isKeycloakProvider()) {
    return children;
  }

  return !SigninManager.isLoggedIn() ? children : null;
};

export default RenderOnAnonymous;
