
import React, { FunctionComponent } from 'react';
import { Button } from './StyledButton.style';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  [key: string]: any;
}
const Component: FunctionComponent<Props> = (
  { onClick, variant = '', ...otherProps }: Props) => (
    <Button
      variant={variant}
      onClick={onClick}
      {...otherProps}
    />
  );

export {
  Component as Button,
};
