// import { Header } from '$components/Header';
// import Nav from '$components/Nav';
// import { NavRouter } from './../../NavRouter';
import React from 'react';
import classes from './Home.module.scss';
import Header1 from '$components/Header1/Header1';
import Navbar from '$components/Navbar/Navbar';
import Slider from '$components/Slider/Slider';
import Feature from '$components/Feature/Feature'
import Footer from '$components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Header1 />
        <Navbar/>
        <Slider/>
        <Feature/>
        <Footer/>
      {/* <div className={classes.navPanel}>
        <Nav />
      </div>

      <div className={classes.contentPanel}>
        <div className={classes.contentHeader}>
          <Header />
        </div>
        <NavRouter />
      </div> */}
    </div>
  );
};

export default Home;
