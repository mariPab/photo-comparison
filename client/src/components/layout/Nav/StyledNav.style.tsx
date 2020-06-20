import styled from 'styled-components';
import variables from '../../../styles/variables';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  width: 35vw;
  overflow: auto;
  border-right: 1px solid ${lighten(0.2, variables.colorBorder)};
  h3 {
    font-size: 1.6rem;
    margin: 20px 0;
    font-weight: 200;
    padding: 0 10px;
    color: ${lighten(0.5, variables.colorText)};
    letter-spacing: 0.1rem;
  }
  ul {
    text-transform: uppercase;
    list-style: none;
    padding: 0 10px;
  }
  li {
    padding: 10px 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 200;
  color: ${variables.colorText};
  letter-spacing: 0.3rem;
  font-size: 1.9rem;
  &:hover {
  color: ${variables.colorNeutral};
  }
`;

export {
  StyledNavLink as NavLink,
  NavContainer
}