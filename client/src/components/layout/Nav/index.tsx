import React, { FunctionComponent } from 'react';
import { PhotoInterface } from '../../../interfaces/photos';
import { NavContainer, NavLink } from './StyledNav.style';

export interface Props {
  linksList: Array<PhotoInterface>;
}
const Component: FunctionComponent<Props> = ({ linksList }: Props) => {
  return (
    <NavContainer>
      <h3>Przejdź do podglądu</h3>
      <ul>
        {linksList.map(link => (
          <li key={link._id}>
            <NavLink exact to={`/photos/${link._id}`}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
};
export {
  Component as Nav,
  Component as NavComponent,
};

