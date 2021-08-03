import { FEEDBACK_PATH, PATH_1, ROOT_PATH } from '$utils/paths';
import { Link, NavLink } from 'react-router-dom';

import { Message } from '$utils/messages';
import React from 'react';
import classes from './Nav.module.scss';
import { routes } from '../../NavRouter';

const Nav = () => {
  const filteredRoutes = routes.filter(
    (route) => route.path !== ROOT_PATH && route.path !== FEEDBACK_PATH,
  );

  return (
    <div className={classes.container}>
      <div>
        <Link to={PATH_1} className={classes.home} aria-label="App-nav">
          <div className={classes.homeContainer}>
            <div className={classes.text}>{Message.navigation.project}</div>
          </div>
        </Link>
        {filteredRoutes.map((path, index) => (
          <NavLink
            activeClassName={classes.activated}
            to={path.path}
            className={classes.link}
            aria-label="App-nav"
            key={index}
          >
            <div className={classes.newContainer}>
              {path.text}{' '}
              {path.new && (
                <span className={classes.new}>{Message.navigation.new}</span>
              )}
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink
        to={FEEDBACK_PATH}
        activeClassName={classes.activated}
        className={classes.feedback}
        aria-label="App-nav"
      >
        {Message.navigation.feedback}
      </NavLink>
    </div>
  );
};

export default Nav;
