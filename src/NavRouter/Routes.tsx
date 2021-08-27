import { FEEDBACK_PATH, PATH_1, PATH_2, ROOT_PATH } from '$utils/paths';
import { Feedback, Page1, Page2 } from '../pages';

import { Message } from '$utils/messages';
import React from 'react';

const routes = [
  {
    path: ROOT_PATH,
    exact: true,
    text: Message.navigation.home,
    new: false,
    main: () => <Page1 />,
  },
  {
    path: PATH_1,
    text: Message.navigation.path_1,
    exact: true,
    new: false,
    main: () => <Page1 />,
  },
  {
    path: PATH_2,
    text: Message.navigation.path_2,
    exact: true,
    new: true,
    main: () => <Page2 />,
  },
  {
    path: FEEDBACK_PATH,
    text: Message.navigation.feedback,
    exact: true,
    new: false,
    main: () => <Feedback />,
  },
];

export { routes };
