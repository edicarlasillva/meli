import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 16px 'Roboto', sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
    background-color: #ebebeb;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;
