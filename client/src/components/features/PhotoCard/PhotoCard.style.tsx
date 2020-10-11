import styled from 'styled-components';
import variables from '../../../styles/variables';
import { darken } from 'polished';

export const PhotoCardRoot = styled.div`
  display: flex;
  margin: 2rem;
  @media(max-width: 668px) {
    margin: 2rem 0;
  }
`;

export const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
`;

export const InfoWrapper = styled.div`
  padding: 0 0 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a.title {
    font-size: 2.2rem;
    font-weight: 400;
    text-decoration: none;
    color: ${variables.colorText};
    display: block;
    letter-spacing: 0.1rem;
  }
  a.fab,
  button {
    font-size: 2.6rem;
    padding: 0 3rem 1rem 0;
    color: ${darken(0.3, variables.colorSupplemental)};
  }
  a:hover {
    color: ${variables.colorNeutral};
  }
  @media(max-width: 768px) {
    a.fab,
    button {
      font-size: 2.4rem;
    }
  }
  @media(max-width: 668px) {
    a.title {
      font-size: 1.6rem;
    }
    a.fab,
    button {
      font-size: 2rem;
    }
  }
`;

export const ActionsBox = styled.div`
  
`;
