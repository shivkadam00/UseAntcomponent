import { Home, Welcome } from './../../pages';

import React from 'react';
import SigninManager from './../../authentication';

const Landing = () => {
  return (
    <>
      {!SigninManager.isLoggedIn() && <Welcome />}

      {SigninManager.isLoggedIn() && <Home />}
    </>
  );
};

export default Landing;
