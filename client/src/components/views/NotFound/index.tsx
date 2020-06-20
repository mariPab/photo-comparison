import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { NotFoundPage } from './StyledNotFound.style';

const Component: FunctionComponent = () => (
  <NotFoundPage>
    <p>Strona nie istnieje</p>
    <NavLink exact to={`/`}>
      Powrót do strony głównej
    </NavLink>
  </NotFoundPage>
);
export {
  Component as NotFound,
  Component as NotFoundComponent,
};
