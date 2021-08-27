import { AntButton } from 'ui-foundation-components-react';
import { Message } from '$utils/messages';
import React from 'react';
import SigninManager from './../../authentication';
import classes from './Header.module.scss';
import { isKeycloakProvider } from '$utils/env';

export default function Header() {
  return (
    <div className={classes.container}>
      <div>{Message.navigation.header_text}</div>

      {isKeycloakProvider() && (
        <div>
          {!SigninManager.isLoggedIn() && (
            <AntButton size="middle" onClick={() => SigninManager.doLogin()}>
              {Message.auth.login}
            </AntButton>
          )}
          {SigninManager.isLoggedIn() && (
            <AntButton size="middle" onClick={() => SigninManager.doLogout()}>
              {Message.auth.logout}
            </AntButton>
          )}
        </div>
      )}
    </div>
  );
}
