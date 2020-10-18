import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { NotFoundPage } from './NotFound.style';

const NotFound: FunctionComponent = () => (
  <NotFoundPage>
    <p>Strona nie istnieje</p>
    <NavLink exact to={`/`}>
      Powrót do strony głównej
    </NavLink>
  </NotFoundPage>
);
export default NotFound;