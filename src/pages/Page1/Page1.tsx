import { Message } from '$utils/messages';
import React from 'react';
import classes from './Page1.module.scss';

const Page1 = () => {
  return <div className={classes.container}>{Message.pages.page1_content}</div>;
};

export default Page1;
