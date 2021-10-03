import { Formval } from '$components/Formval';
import React from 'react';
import { Table2 } from '$components/Table2';
import { Tablee } from '$components/Tablee';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <Tablee />
        <Table2 />
      </div>
      <Formval />
    </>
  );
};

export default Home;
