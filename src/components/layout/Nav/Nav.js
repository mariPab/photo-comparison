import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
// import { connect } from 'react-redux';


const Component = () => {
  return (
    <nav>
      <NavLink className={styles.navlink} exact to='/'>
        Strona główna
        </NavLink>
    </nav >
  );
};

// Component.propTypes = {
// };

// const mapStateToProps = state => ({
// });

// const Container = connect(mapStateToProps, null)(Component);

export {
  Component as Nav,
  Component as NavComponent,
};
