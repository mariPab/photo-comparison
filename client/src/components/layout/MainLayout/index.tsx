import React, { FunctionComponent } from 'react';
import styles from './MainLayout.module.scss';

interface Props {
  children: React.ReactElement
}
const Component: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};
export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
