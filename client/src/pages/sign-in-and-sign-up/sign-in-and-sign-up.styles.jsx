import styled from 'styled-components';


export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  -webkit-columns: 2 425px;
  -moz-columns: 2 425px;
  columns: 2 425px;
  -webkit-column-gap: 4em;
  -moz-column-gap: 4em;
  column-gap: 4em;

  @media screen and (max-width: 800px) {
    display: block;
    width: 450px;
    -webkit-columns: 1 100%;
    -moz-columns: 1 100%;
    columns: 1 100%;
    -webkit-column-gap: 5px;
    -moz-column-gap: 5px;
    column-gap: 5px;
    }
`;

