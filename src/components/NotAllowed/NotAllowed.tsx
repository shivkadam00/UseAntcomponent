import { Message } from '$utils/messages';
import React from 'react';

const NotAllowed = () => {
  return <h1 className="text-info">{Message.pages.not_allowed}</h1>;
};

export default NotAllowed;
