import { AntButton } from 'ui-foundation-components-react';
import { Message } from '$utils/messages';
import React from 'react';
import SigninManager from './../../authentication';
import classes from './Header.module.scss';

export default function Header() {
  return (
    <div className={classes.container}>
      <div>{Message.navigation.header_text}</div>

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
}
