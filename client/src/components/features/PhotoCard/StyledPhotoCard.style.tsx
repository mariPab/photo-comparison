import styled from 'styled-components';
import variables from '../../../styles/variables';
import { darken } from 'polished';

export const PhotoCardRoot = styled.div`
  display: flex;
  margin: 10px;
  margin: 20px;
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
  padding: 0 20px;
  p {
    font-size: 2rem;
    margin: 0;
    letter-spacing: 0.1rem;
  }
  a,
  button {
    font-size: 2.6rem;
    padding: 0 20px 0 0;
    margin-top: 30px;
    color: ${darken(0.3, variables.colorSupplemental)};
  }
`;
