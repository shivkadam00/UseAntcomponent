import { Home, Welcome } from './../../pages';

import React from 'react';
import RenderOnAnonymous from '$components/RenderOnAnonymous';
import RenderOnAuthenticated from '$components/RenderOnAuthenticated';
import { isKeycloakProvider } from '$utils/env';

const Landing = () => {
  return (
    <>
      {isKeycloakProvider() ? (
        <>
          <RenderOnAnonymous>
            <Welcome />
          </RenderOnAnonymous>
          <RenderOnAuthenticated>
            <Home />
          </RenderOnAuthenticated>
        </>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Landing;
