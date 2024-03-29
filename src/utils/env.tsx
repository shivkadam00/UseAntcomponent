import { KEYCLOAK_AUTH } from './paths';

export const FOUNDATION_UI_AUTH_PROVIDER: string =
  process.env.FOUNDATION_UI_AUTH_PROVIDER || '';

export const FOUNDATION_UI_AUTH_KEYCLOAK_URL: string =
  process.env.FOUNDATION_UI_AUTH_KEYCLOAK_URL || '';

export const FOUNDATION_UI_AUTH_KEYCLOAK_REALM: string =
  process.env.FOUNDATION_UI_AUTH_KEYCLOAK_REALM || '';

export const FOUNDATION_UI_AUTH_KEYCLOAK_CLIENT_ID: string =
  process.env.FOUNDATION_UI_AUTH_KEYCLOAK_CLIENT_ID || '';

export const isKeycloakProvider = () =>
  FOUNDATION_UI_AUTH_PROVIDER === KEYCLOAK_AUTH;
