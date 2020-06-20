import React from 'react';

interface Props {
  children: React.ReactElement;
}
const Component: React.FunctionComponent<Props> = ({ children }: Props) => (
  <div>
    {children}
  </div>
);
export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
