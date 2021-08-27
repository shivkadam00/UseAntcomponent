import { Home, Welcome } from './../../pages';

import React from 'react';
import RenderOnAnonymous from '$components/RenderOnAnonymous';
import RenderOnAuthenticated from '$components/RenderOnAuthenticated';

const Landing = () => {
  return (
    <>
      Test
      <RenderOnAnonymous>
        <Welcome />
      </RenderOnAnonymous>
      <RenderOnAuthenticated>
        <Home />
      </RenderOnAuthenticated>
    </>
  );
};

export default Landing;
