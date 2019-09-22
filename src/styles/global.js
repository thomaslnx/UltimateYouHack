import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #ededed;
  }

  html, body, #root {
    min-height: 100%;
    max-width: 750px;
    margin: auto;
  }

  body {
    background-color: #fafaff;
    -webkit-font-amoothing: antialiased !important;
  }
`;
