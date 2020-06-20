import { createGlobalStyle } from 'styled-components';
import variables from './variables';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  font-size: 10px;
}

body {
  font-family: ${variables.fontMain};
  background-color: ${variables.colorSupplemental};
}
`;