import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-repeat: no-repeat, repeat;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;

export const FooterText = styled.h1`
  color: white;
  font-size: 3em;
  font-weight:bold;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1em;
  align-items: center;
  vertical-align: middle;
  letter-spacing: 10px;
  margin-top: 10px;
  padding-top: 0;
  margin-bottom: 10px;

  @media screen and (max-width: 1883px) {
    font-size: 3em;
    margin-top: 10px;
  }

  @media screen and (max-width: 1425px) {
    font-size: 3em;
    line-height: 1.5em;
    margin-top: 10px;
  }

  @media screen and (max-width: 900px) {
    font-size: 2em;
    line-height: 1.5em;
    margin-top: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1em;
    line-height: 1.5em;
    margin-top: 10px;
  }
`;

export const FooterCopyrightContainer = styled.div`
  height: 50px;
  width: 100%;
  //background-color: ${({ theme }) => theme.primaryDark};
  background-color: transparent;
  

`;

export const FooterCopyrightText = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;




