import { FOUNDATION_UI_AUTH_PROVIDER } from '$utils/env';
import { KEYCLOAK_AUTH } from '$utils/paths';
import keycloak from './keycloak';

export interface ISigninManager {
  isKeycloakProvider: () => boolean;
  doLogin: VoidFunction;
  doLogout: VoidFunction;
  isLoggedIn: () => boolean;
  getToken: () => string;
  updateToken: VoidFunction;
  getUsername: () => string;
  hasRole: (roles: Array<string>) => boolean;
}

const isKeycloakProvider = () => FOUNDATION_UI_AUTH_PROVIDER === KEYCLOAK_AUTH;

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => keycloak.authenticated || false;

const updateToken = (successCallback: any) =>
  keycloak.updateToken(5).then(successCallback).catch(doLogin);

// @ts-ignore
const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles: Array<string>) =>
  roles.some((role: string) => keycloak.hasRealmRole(role));

const SigninManager: ISigninManager = {
  isKeycloakProvider,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
} as any;

const SigninManagerDummy: ISigninManager = {
  isKeycloakProvider: () => false,
  // tslint:disable-next-line:no-empty
  doLogin: () => {},
  // tslint:disable-next-line:no-empty
  doLogout: () => {},
  isLoggedIn: () => true,
  getToken: () => 'dummy-token',
  // tslint:disable-next-line:no-empty
  updateToken: () => {},
  getUsername: () => 'dummy-name',
  hasRole: () => true,
};

export default isKeycloakProvider() ? SigninManager : SigninManagerDummy;
