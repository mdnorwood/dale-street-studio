import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-color: black;
  background-repeat: no-repeat, repeat;
  height: auto;
  padding: 10px;
  border: 5px solid white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;

export const BannerText = styled.h1`
  color: white;
  font-size: 3em;
  font-weight:bold;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1em;
  align-items: center;
  vertical-align: middle;
  letter-spacing: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 1883px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 1425px) {
    font-size: 2.5em;
    line-height: 1.5em;
  }

  @media screen and (max-width: 1200px) {
    font-size: 2em;
    line-height: 1.5em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.3em;
    line-height: 1.5em;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.5em;
    line-height: 1.5em;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
    line-height: 1.5em;
    margin-top: 10px;
  }
`;

export const HeaderLineBreak = styled.br`
    display: inline;

    @media screen and (max-width: 900px) {
    display: none;
  }
  
`;


