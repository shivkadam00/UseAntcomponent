import { Landing, Placeholder } from '../pages';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import SigninManager from './../authentication';
import keycloak from '../authentication/keycloak';

const App = () => {
  return (
    <>
      {SigninManager.isKeycloakProvider() ? (
        <ReactKeycloakProvider
          authClient={keycloak}
          initOptions={{ onLoad: 'check-sso' }}
          LoadingComponent={<Placeholder />}
        >
          <BrowserRouter>
            <Landing />
          </BrowserRouter>
        </ReactKeycloakProvider>
      ) : (
        <BrowserRouter>
          <Landing />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
