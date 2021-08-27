import { AntButton } from 'ui-foundation-components-react';
import { Message } from '$utils/messages';
import React from 'react';
import SigninManager from './../../authentication';
import { capitalize } from '$utils/text';
import classes from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={classes.container}>
      <div>
        <div>
          <h1>{Message.welcome.text}</h1>
        </div>
        <div>
          <h2>
            {Message.welcome.hello}
            {SigninManager.getUsername()
              ? capitalize(SigninManager.getUsername())
              : Message.welcome.anonymous}
            !
          </h2>
        </div>
        {!SigninManager.isLoggedIn() && (
          <div>
            <p>{Message.welcome.auth_text}</p>
          </div>
        )}
      </div>

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
    </div>
  );
};

export default Welcome;
