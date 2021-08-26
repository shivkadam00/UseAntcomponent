import { Header } from '$components/Header';
import Nav from '$components/Nav';
import { NavRouter } from './../../NavRouter';
import React from 'react';
import classes from './Home.module.scss';

const Home = () => {
  return (
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
  );
};

export default Home;
