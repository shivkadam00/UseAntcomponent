import { Message } from '$utils/messages';
import React from 'react';
import classes from './ProgressBar.module.scss';

const ProgressBar = () => {
  return (
    <div className={classes.container}>
      <span className={classes.span}>{Message.common.loading}</span>
    </div>
  );
};

export default ProgressBar;
