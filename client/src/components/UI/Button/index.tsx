
import React, { FunctionComponent } from 'react';
import { CustomButton } from './Button.style';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  [key: string]: any;
}
export const Button: FunctionComponent<Props> = (
  { onClick, variant = '', ...otherProps }: Props) => (
    <CustomButton
      variant={variant}
      onClick={onClick}
      {...otherProps}
    />
  );