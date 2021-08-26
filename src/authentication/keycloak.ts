import {
  FOUNDATION_UI_AUTH_KEYCLOAK_CLIENT_ID,
  FOUNDATION_UI_AUTH_KEYCLOAK_REALM,
  FOUNDATION_UI_AUTH_KEYCLOAK_URL,
} from '$utils/env';

import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: FOUNDATION_UI_AUTH_KEYCLOAK_URL,
  realm: FOUNDATION_UI_AUTH_KEYCLOAK_REALM,
  clientId: FOUNDATION_UI_AUTH_KEYCLOAK_CLIENT_ID,
};
const keycloak = Keycloak(keycloakConfig);
export default keycloak;
