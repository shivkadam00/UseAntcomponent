import { Message } from '$utils/messages';
import React from 'react';
import classes from './Header.module.scss';

export default function Header() {
  return (
    <div className={classes.container}>{Message.navigation.header_text}</div>
  );
}
