import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { MAIN_PAGE_URL } from '../../../config';

const Component = ({ linksList }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {linksList.map(link => (
          <li>
            <NavLink key={link._id} className={styles.navlink} exact to={`${MAIN_PAGE_URL}/photos/${link._id}`}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Component.propTypes = {
  linksList: PropTypes.arrayOf(PropTypes.object),
};


export {
  Component as Nav,
  Component as NavComponent,
};

