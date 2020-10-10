import styled from 'styled-components';
import variables from '../../../styles/variables';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';

export const AdminContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
`;

const CustomNavLink = styled(NavLink)`
  font-size: 2rem;
  text-decoration: none;
  /* color: ${variables.colorText}; */
  letter-spacing: 0.1rem;
  padding: 30px 0;
  &:hover {
    color: ${variables.colorNeutral};
  }
`;

export const ManageSection = styled.div`
  overflow: auto;
  height: calc(100% - 12rem);
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
    height: 4px;
    background: ${variables.colorSupplemental};
  }
  &::-webkit-scrollbar-thumb {
    background: ${lighten(0.1, variables.colorBorder)};
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 1rem;
  border-top: 1px solid ${lighten(0.1, variables.colorBorder)};
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  height: 12rem;
  width: 100%;
`;
export {
  CustomNavLink as NavLink,
};


