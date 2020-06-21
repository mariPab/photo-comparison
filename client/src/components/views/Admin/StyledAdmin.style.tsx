import styled from 'styled-components';
import variables from '../../../styles/variables';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';

const AdminContainer = styled.div`
  display: flex;
`;

const LinksPanel = styled.div`
  padding: 50px;
  width: 65vw;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 2.6rem;
  text-decoration: none;
  color: ${variables.colorText};
  letter-spacing: 0.1rem;
  padding: 30px 0;
  &:hover {
    color: ${variables.colorNeutral};
  }
`;

const ManageSection = styled.div`
  border-top: 1px solid ${lighten(0.1, variables.colorBorder)};
  padding-top: 15px;
  margin-top: 30px;
`;

export {
  AdminContainer,
  LinksPanel,
  StyledNavLink as NavLink,
  ManageSection,
};