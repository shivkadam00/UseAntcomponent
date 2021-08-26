import { FOUNDATION_UI_AUTH_PROVIDER } from '$utils/env';
import { KEYCLOAK_AUTH } from '$utils/paths';
import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const KeycloakAuthentication = ({ children }: any) => {
  const { keycloak, initialized } = useKeycloak();

  if (
    FOUNDATION_UI_AUTH_PROVIDER === KEYCLOAK_AUTH &&
    (!initialized || !keycloak.authenticated)
  ) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return children;
};

export default KeycloakAuthentication;
