import { Message } from '$utils/messages';
import React from 'react';
import classes from './Feedback.module.scss';

const Feedback = () => {
  return <div className={classes.container}>{Message.pages.feedback_form}</div>;
};

export default Feedback;
