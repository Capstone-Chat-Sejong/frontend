import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    overflow-wrap: break-word;
    word-break: break-word;
    overflow: hidden;
  }
  *,
  *::before,
  *::after {  
    font-family: S-CoreDream-3Light;
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }
  html, 
  body {
    height: 100%;
  }
  ul,
  li {
    list-style: none;
  }
  a,
  a:hover,
  a:active {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
  input {
    border: none;
    outline: none;
  }
  textarea {
    border: none;
    outline: none;
    resize: none;
  }
`;

export default GlobalStyle;
