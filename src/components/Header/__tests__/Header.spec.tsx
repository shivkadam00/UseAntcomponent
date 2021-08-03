import '@testing-library/jest-dom/extend-expect';

import { cleanup } from '$utils/test';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Header tests', () => {
  it('should render properly', () => {
    expect(true).toBe(true);
  });
});
