import styled from 'styled-components';
import variables from './variables';
import { lighten, darken } from 'polished';

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  h2 {
    font-size: 3.5rem;
    margin-top: 70px;
    text-transform: uppercase;
  }
  a {
    font-size: 2rem;
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
  label {
    text-transform: uppercase;
    display: block;
    font-size: 2.5rem;
    padding: 15px 0;
  }

  input:not([type="file"]),
  textarea {
    border: 1px solid ${variables.colorBorderLight};
    background-color: ${variables.colorSupplemental};
    font-family: ${variables.fontMain};
    outline: none;
    font-size: 2.5rem;
    border-radius: 4px;
    width: 100%;
    padding: 20px;

    &:active,
    &:focus {
    border-color: ${variables.colorNeutral};
    background-color: ${lighten(0.5, variables.colorNeutral)};
    }
    &::placeholder {
      font-size: 2.5rem;
      opacity: 0.3;
    }
  }
  input[type="number"] {
    width: 100px;
    padding: 10px;
    margin: 0 10px;
    font-weight: 900;
    font-size: 2rem;
  }
  .flexContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .label__dimensions {
    text-transform: unset;
    font-weight: 400;
  }
  button {
    float: right;
    margin: 20px 0;
  }
  h3 {
    font-size: 2rem;
    opacity: 0.2;
    margin: 0;
    margin-top: 40px;
  }
  h4 {
    color: ${variables.colorNeutral};
    font-size: 1.5rem;
    margin: 7px 0;
  }
  @media (max-width: 576px) {
  .flexContainer {
    flex-direction: column;
    align-items: flex-start;
  }
}
`;

