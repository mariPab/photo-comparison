
import React, { FunctionComponent } from 'react';
import styles from './Button.module.scss';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  [key: string]: any;
}
const Component: FunctionComponent<Props> = ({ onClick, variant = '', ...otherProps }: Props) => {
  return (
    <button
      {...otherProps}
      className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
      onClick={onClick}
    />
  );
};
export {
  Component as Button,
  Component as ButtonComponent,
};
