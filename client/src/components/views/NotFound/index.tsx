import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';

const Component: FunctionComponent = () => (
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
