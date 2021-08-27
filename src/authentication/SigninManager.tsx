import keycloak from './keycloak';

export interface ISigninManager {
  doLogin: VoidFunction;
  doLogout: VoidFunction;
  isLoggedIn: () => boolean;
  getToken: () => string;
  updateToken: VoidFunction;
  getUsername: () => string;
  hasRole: (roles: Array<string>) => boolean;
}

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
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
} as any;

export default SigninManager;
