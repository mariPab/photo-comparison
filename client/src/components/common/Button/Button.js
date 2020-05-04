
import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Component = ({ onClick, variant = '', ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
      onClick={onClick}
    />
  );
};
Component.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
export {
  Component as Button,
  Component as ButtonComponent,
};
