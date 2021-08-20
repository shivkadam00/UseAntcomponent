import {
  AntButton,
  TestComponent,
  TestComponentLess,
} from 'ui-foundation-components-react';

import { Message } from '$utils/messages';
import React from 'react';
import classes from './Page1.module.scss';
import { useKeycloak } from '@react-keycloak/web';

const Page1 = () => {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <h3>Loading ... !!!</h3>;
  }

  return (
    <div className={classes.container}>
      {Message.pages.page1_content}
      <hr />
      <AntButton>Ant button</AntButton>
      <hr />
      <h4>TestComponent</h4>
      <TestComponent theme={'primary'} />
      <hr />
      <h4>TestComponentLess</h4>
      <TestComponentLess theme={'primary'} />
      <hr />
    </div>
  );
};

export default Page1;
