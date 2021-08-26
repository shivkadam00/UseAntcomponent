import { AntButton } from 'ui-foundation-components-react';
import React from 'react';
import SigninManager from './../../authentication';
import { capitalize } from '$utils/text';
import classes from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={classes.container}>
      <div>
        <div>
          <h1>Welcome Page</h1>
        </div>
        <div>
          <h2>
            Hello{' '}
            {SigninManager.getUsername()
              ? capitalize(SigninManager.getUsername())
              : 'Anonymous'}
            !
          </h2>
        </div>
        {!SigninManager.isLoggedIn() && (
          <div>
            <p>Please authenticate yourself!</p>
          </div>
        )}
      </div>

      <div>
        {!SigninManager.isLoggedIn() && (
          <AntButton size="middle" onClick={() => SigninManager.doLogin()}>
            Login
          </AntButton>
        )}
        {SigninManager.isLoggedIn() && (
          <AntButton size="middle" onClick={() => SigninManager.doLogout()}>
            Logout
          </AntButton>
        )}
      </div>
    </div>
  );
};

export default Welcome;
