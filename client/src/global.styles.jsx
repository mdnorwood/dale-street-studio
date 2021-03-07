import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    text-rendering: optimizeLegibility;
    padding: 20px 40px;
    margin-top: 110px;

    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};

    @media screen and (max-width: 800px) {
      padding: 0;
      margin-top:70px;
    }
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`

