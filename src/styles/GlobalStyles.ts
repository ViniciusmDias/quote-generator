import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    
  }
  #__next {
    margin: 0 7%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
