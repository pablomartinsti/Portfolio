import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", Arial, sans-serif;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 92px;
  }

  body {
    background: #070b0f;
    color: #f8fafc;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
  }

  button,
  a {
    font: inherit;
  }

  button {
    color: inherit;
  }

  ::selection {
    background: rgba(57, 209, 106, 0.35);
  }
`;
