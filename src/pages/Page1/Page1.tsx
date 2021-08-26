import { AntButton } from 'ui-foundation-components-react';
import KeycloakAuthentication from './../../authentication/KeycloakAuthentication';
import { Message } from '$utils/messages';
import React from 'react';
import classes from './Page1.module.scss';

const Page1 = () => {
  return (
    <KeycloakAuthentication>
      <div className={classes.container}>
        {Message.pages.page1_content}
        <hr />
        <AntButton>Ant button</AntButton>
        <hr />
        {/* <h4>TestComponent</h4>
        <TestComponent theme={'primary'} />
        <hr />
        <h4>TestComponentLess</h4>
        <TestComponentLess theme={'primary'} />
        <hr /> */}
      </div>
    </KeycloakAuthentication>
  );
};

export default Page1;
