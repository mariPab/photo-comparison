import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';

const Component = () => (
  <div className={styles.root}>
    <p>Strona nie istnieje</p>
    <NavLink exact to={`/`}>
      Powrót do strony głównej
    </NavLink>
  </div>
);

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
