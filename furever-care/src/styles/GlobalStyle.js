import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

// Define global styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${theme.background};
    color: ${theme.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: ${theme.button};
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: ${theme.buttonHover};
  }
`;

export default GlobalStyle;
