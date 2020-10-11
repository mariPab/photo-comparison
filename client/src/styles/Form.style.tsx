import styled from 'styled-components';
import variables from './variables';
import { lighten, darken } from 'polished';

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  h2 {
    font-size: 2.5rem;
    margin-top: 5rem;
  }
  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: ${darken(0.2, variables.colorNeutral)};
    > svg {
      margin-top: 20px;
      margin-right: 20px;
    }
    &:hover {
      color: ${variables.colorNeutral}
    }
  }
  svg.icon__background {
    opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-right: 50px;
    color: ${variables.colorBorderLight};
    z-index: -2;
  }
`;

export const FormElement = styled.form`
  width: 100%;
  textarea {
    border: 1px solid ${variables.colorBorderLight};
    background-color: ${variables.colorSupplemental};
    font-family: ${variables.fontMain};
    outline: none;
    font-size: 2rem;
    border-radius: 4px;
    width: 100%;
    padding: 20px;
    resize: none;

    &:active,
    &:focus {
    border-color: ${variables.colorNeutral};
    background-color: ${lighten(0.5, variables.colorNeutral)};
    }
    &::placeholder {
      font-size: 2rem;
      opacity: 0.3;
    }
  }
  button {
    float: right;
    margin: 20px 0;
  }
  h3 {
    font-size: 1.6rem;
    opacity: 0.2;
    margin: 0;
    margin-top: 40px;
    /* padding: 0 15px; */
  }
  h4 {
    color: ${variables.colorNeutral};
    font-size: 1.5rem;
    margin: 7px 0;
  }
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
  }
`;
