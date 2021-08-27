import { AntButton } from 'ui-foundation-components-react';
import KeycloakAuthentication from './../../authentication/KeycloakAuthentication';
import { Message } from '$utils/messages';
import React from 'react';
import classes from './Page1.module.scss';

const Page1 = () => {
  return (
    <div className={classes.container}>
      {Message.pages.page1_content}
      <hr />
      <AntButton>{Message.common.btn_1_text}</AntButton>
      <hr />
    </div>
  );
};

export default Page1;
