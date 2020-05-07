import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { PhotoInterface } from '../../../interfaces/photos';

interface Props {
  linksList: Array<PhotoInterface>
}
const Component: FunctionComponent<Props> = ({ linksList }: Props) => {
  return (
    <nav className={styles.nav}>
      <h3>Przejdź do podglądu</h3>
      {linksList && linksList.length ? (
        <ul>
          {linksList.map(link => (
            <li key={link._id}>
              <NavLink className={styles.navlink} exact to={`/photos/${link._id}`}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};
export {
  Component as Nav,
  Component as NavComponent,
};

