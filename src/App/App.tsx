import { Landing, Placeholder } from '../pages';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../authentication/keycloak';

const App = () => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{ onLoad: 'check-sso' }}
      LoadingComponent={<Placeholder />}
    >
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
};

export default App;
