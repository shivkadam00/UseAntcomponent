import { Landing, Placeholder } from '../pages';

import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { isKeycloakProvider } from '$utils/env';
import keycloak from '../authentication/keycloak';

const App = () => {
  return (
    <>
      {isKeycloakProvider() ? (
        <ReactKeycloakProvider
          authClient={keycloak}
          initOptions={{ onLoad: 'check-sso' }}
          LoadingComponent={<Placeholder />}
        >
          <Landing />
        </ReactKeycloakProvider>
      ) : (
        <Landing />
      )}
    </>
  );
};

export default App;
