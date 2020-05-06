import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Component = ({ linksList }) => {
  return (
    <nav className={styles.nav}>
      <h3>Przejdź do podglądu</h3>
      {linksList && linksList.length ? (
        <ul>
          {linksList.map(link => (
            <li key={link._id}>
              <NavLink className={styles.navlink} exact to={`/photos/${link._id}`}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
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

