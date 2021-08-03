import { Header } from '$components/Header';
import Nav from '$components/Nav';
import { NavRouter } from '../NavRouter';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import classes from './App.module.scss';

const App = () => {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
};

export default App;
