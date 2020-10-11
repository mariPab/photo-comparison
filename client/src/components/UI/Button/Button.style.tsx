import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import variables from '../../../styles/variables';
import { darken, lighten } from 'polished';

interface Props {
  variant: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const handleVariantStyles = (variant: string): FlattenSimpleInterpolation => {
  switch (variant) {
    case 'fab': {
      return css`
        background: none;
        border-radius: 50%;
        border: 0;
        padding: 0.5rem;
        display: inline-block;
        font-size: 2.5rem;
        color: ${darken(0.15, variables.colorBorder)};
      `;
    }
    default: {
      return css`
        background: ${variables.colorNeutral};
        font-size: 1.6rem;
        padding: 1.4rem 2.2rem;
        border-radius: 24px;
        color: ${variables.colorWhite};
        border: 1px solid ${variables.colorNeutral};
        @media(max-width: 668px) {
          font-size: 1.4rem;
          padding: 1rem 1.6rem;
      }
      `;
    }
  }
};
export const CustomButton: React.FunctionComponent<Props> = styled.button<Props>`
  ${({ variant }: Props): FlattenSimpleInterpolation => handleVariantStyles(variant)}
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  text-align: center;
  letter-spacing: 0.1rem;
  transition: ${variables.transitionAll};
  &:hover {
    background-color: ${lighten(0.5, variables.colorNeutral)};
    color: ${variables.colorNeutral};
    border-color: ${variables.colorNeutral};
  }
  a {
    text-decoration: none;
    letter-spacing: 0.3rem;
    color: ${variables.colorText};
  }
`;