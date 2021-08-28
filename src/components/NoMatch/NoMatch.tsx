import { Message } from '$utils/messages';
import React from 'react';

const NoMatch = () => {
  return <h1 className="text-info">{Message.pages.no_match}</h1>;
};

export default NoMatch;
