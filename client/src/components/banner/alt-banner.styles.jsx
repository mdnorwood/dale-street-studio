import styled from 'styled-components';

export const AltBannerContainer = styled.div`
  background-color: transparent;
  background-repeat: no-repeat, repeat;
  height: auto;
  border: 5px solid white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;

export const AltBannerTextBackgroundGreen = styled.div`
   background-image: radial-gradient(#7ac943 20%, transparent 20%),
     radial-gradient(#7ac943 20%, transparent 20%);
    background-position: 0 0, 0 0;
    background-size: 10px 10px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 3;
    align-items: center;
    text-align: center;
`;

export const AltBannerTextBackgroundYellow = styled.div`
   background-image: radial-gradient(#FFFF00 20%, transparent 20%),
     radial-gradient(#FFFF00 20%, transparent 20%);
    background-position: 0 0, 0 0;
    background-size: 10px 10px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 3;
    align-items: center;
`;

export const AltBannerTextBackgroundRed = styled.div`
   background-image: radial-gradient(#FF0000 20%, transparent 20%),
     radial-gradient(#FF0000 20%, transparent 20%);
    background-position: 0 0, 0 0;
    background-size: 10px 10px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 3;
    align-items: center;
`;

export const AltHeaderText = styled.span`
  font-size: 2em;
  margin-top: 0;

  @media screen and (max-width: 1883px) {
    font-size: 1.8em;
  }

  @media screen and (max-width: 1425px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const AltHeaderSubText = styled.span`
  line-height: 1em;
    font-size: .8em;

  @media screen and (max-width: 1883px) {
    font-size: .8em;
  }

  @media screen and (max-width: 1425px) {
    font-size: .8em;
  }

  @media screen and (max-width: 1200px) {
    font-size: .8em;
  }

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }

  @media screen and (max-width: 900px) {
    font-size: .8em;
  }

  @media screen and (max-width: 600px) {
    font-size: .8em;
  }

`;