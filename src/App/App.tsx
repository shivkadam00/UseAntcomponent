import { BrowserRouter } from 'react-router-dom';
import { Header } from '$components/Header';
import Nav from '$components/Nav';
import { NavRouter } from '../NavRouter';
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import classes from './App.module.scss';
import keycloak from './../keycloak';

const App = () => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{ onLoad: 'login-required', checkLoginIframe: false }}
    >
      <div>
        <BrowserRouter>
          <div className={classes.container}>
            <div className={classes.navPanel}>
              <Nav />
            </div>

            <div className={classes.contentPanel}>
              <div className={classes.contentHeader}>
                <Header />
              </div>
              <NavRouter />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </ReactKeycloakProvider>
  );
};

export default App;
