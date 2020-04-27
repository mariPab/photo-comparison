import React from 'react';
import styles from './Photo.module.scss';
import BeforeAfterSlider from 'react-before-after-slider';
import before from '../../../images/before.jpeg';
import after from '../../../images/after.jpeg';

const Component = () => (
  <div className={styles.wrapper}>
    <BeforeAfterSlider
      before={before}
      after={after}
      width={640}
      height={480}
    />
  </div>
);

export {
  Component as Photo,
  // Container as Photo,
  Component as PhotoComponent,
};
