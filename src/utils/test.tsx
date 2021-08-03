import React, { ReactElement } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const ProvidersWrapper = ({ children }: { children: ReactElement }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const customRender = (ui: ReactElement, options?: any) => {
  return render(ui, { wrapper: ProvidersWrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
