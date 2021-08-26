import { FOUNDATION_UI_AUTH_PROVIDER } from '$utils/env';
import { KEYCLOAK_AUTH } from '$utils/paths';
import keycloak from './keycloak';

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => keycloak.authenticated || false;

const updateToken = (successCallback: any) =>
  keycloak.updateToken(5).then(successCallback).catch(doLogin);

// @ts-ignore
const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles: any) =>
  roles.some((role: any) => keycloak.hasRealmRole(role));

const SigninManager = {
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
} as any;

const SigninManagerDummy = {
  // tslint:disable-next-line:no-empty
  doLogin: () => {},
  // tslint:disable-next-line:no-empty
  doLogout: () => {},
  isLoggedIn: () => true,
  getToken: () => 'dummy-token',
  // tslint:disable-next-line:no-empty
  updateToken: () => {},
  getUsername: () => 'dummy-name',
  hasRole: true,
};

export default FOUNDATION_UI_AUTH_PROVIDER === KEYCLOAK_AUTH
  ? SigninManager
  : SigninManagerDummy;
