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
