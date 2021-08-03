import { Message } from '$utils/messages';
import React from 'react';
import classes from './Page2.module.scss';

const Page2 = () => {
  return <div className={classes.container}>{Message.pages.page2_content}</div>;
};

export default Page2;
