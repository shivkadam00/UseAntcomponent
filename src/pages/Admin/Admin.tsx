import { Message } from '$utils/messages';
import React from 'react';
import classes from './Admin.module.scss';

const Admin = () => {
  return <div className={classes.container}>{Message.pages.admin}</div>;
};

export default Admin;
