import React from 'react';
import styled, { css } from 'styled-components';
import variables from '../../../styles/variables';
import { lighten } from 'polished';
import { InputProps } from '.';

const nonFileInputType = (isNonFileType: boolean) => {
  return isNonFileType && css`
    border: 1px solid ${variables.colorBorderLight};
    background-color: ${variables.colorSupplemental};
    font-family: ${variables.fontMain};
    outline: none;
    font-size: 2.5rem;
    border-radius: 4px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    &:active,
    &:focus {
    border-color: ${variables.colorNeutral};
    background-color: ${lighten(0.5, variables.colorNeutral)};
    }
    &::placeholder {
      font-size: 2.5rem;
      opacity: 0.3;
    }
  `;
};

const numberInput = (isNumberType: boolean) => {
  return isNumberType && css`
    width: 100px;
    padding: 10px;
    margin: 0 10px;
    font-weight: 900;
    font-size: 2rem;
  `;
};
const StyledInput = styled(({ type, ...others }: InputProps) => <input {...others} type={type} />)`
  ${({ type }) => nonFileInputType(type !== 'file')};
  ${({ type }) => numberInput(type === 'number')};
`;

interface LabelProps {
  flex: boolean;
  [key: string]: any;
}
const StyledLabel = styled(({ flex, ...others }: LabelProps) => <label {...others} />)`
  text-transform: ${({ flex }) => flex ? 'unset' : 'uppercase'};
  font-weight: ${({ flex }) => flex ? 400 : 'normal'};
  font-size: 2.5rem;
  margin: 15px;
  display: block;
`;

export {
  StyledInput as Input,
  StyledLabel as Label,
};