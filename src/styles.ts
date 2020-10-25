import { createGlobalStyle } from "styled-components";
import { TABBING_CLASS_NAME } from "./utils/focusVisible";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin: 0;
    box-sizing: border-box;
  }
  
  body:not(.${TABBING_CLASS_NAME}) *:focus {
    outline-width: 0;
  }
`;
