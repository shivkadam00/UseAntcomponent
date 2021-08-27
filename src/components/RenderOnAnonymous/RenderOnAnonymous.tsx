import React from 'react';
import SigninManager from './../../authentication';

export interface RenderOnAnonymousProps {
  children: React.ReactElement;
}

const RenderOnAnonymous = ({ children }: RenderOnAnonymousProps) => {
  return !SigninManager.isLoggedIn() ? children : null;
};

export default RenderOnAnonymous;
