import { Message } from '$utils/messages';
import React from 'react';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      {Message.pages.page_not_found_content}
    </div>
  );
};

export default PageNotFound;
