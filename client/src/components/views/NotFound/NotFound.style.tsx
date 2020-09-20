import styled from 'styled-components';
import variables from '../../../styles/variables';

export const NotFoundPage = styled.div`
  margin: 100px auto;
  text-align: center;
  p {
    font-size: 3rem;
    letter-spacing: 0.1rem;
  }
  a {
    font-size: 2rem;
    color: ${variables.colorBorder};
    text-decoration: none;
    &:hover {
      color: ${variables.colorNeutral};
    }
  }
`;