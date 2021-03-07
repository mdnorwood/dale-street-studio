import styled from 'styled-components';

export const BannerContainer = styled.div`
  /* background: linear-gradient(to top, rgba(250,174,43, 0.6) 10%, transparent),
    url('https://firebasestorage.googleapis.com/v0/b/definition-music-and-mastering.appspot.com/o/images%2FBanner-Background.webp?alt=media&token=64576274-d4d7-4723-870d-33f65b651976') left 10% bottom 20%/cover no-repeat border-box,
    url('') left 10% bottom 20%/cover no-repeat border-box,
    url('') left 10% bottom 20%/cover no-repeat border-box,
    url('') left 10% bottom 20%/cover no-repeat border-box,
    url('') left 10% bottom 20%/cover no-repeat border-box,
    #ff1b68; */
  /* background-color: #faae2b; */
  /* background-image: url("freedom.jpg");
    background-size: cover;
    background-position: left 10% bottom 20%; */
  /* background-repeat: no-repeat;
    background-origin: border-box;
    background-clip: border-box; */
  /* background-image: linear-gradient(180deg, red 70%, blue 60%, rgba(0,0,0,0.5)); */
  /* background-image: radial-gradient(ellipse farthest-corner at 20% 50%, red, blue 70%, green); */
  background-repeat: no-repeat, repeat;
  height: 410px;
  padding: 10px;
  border: 5px dashed white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;


export const BannerTextBackground = styled.div`
   background-image: radial-gradient(#7ac943 20%, transparent 20%),
     radial-gradient(#7ac943 20%, transparent 20%);
    background-position: 0 0, 0 0;
    background-size: 10px 10px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 2;
    align-items: center;
`;

export const BannerText = styled.h1`
  color: white;
  font-size: 6em;
  font-weight:bold;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1em;
  align-items: center;
  vertical-align: middle;
  letter-spacing: 10px;
  margin-top: 40px;

  @media screen and (max-width: 1883px) {
    font-size: 4.3em;
    margin-top: 40px;
  }

  @media screen and (max-width: 1425px) {
    font-size: 3.5em;
    line-height: 1.5em;
    margin-top: 40px;
  }

  @media screen and (max-width: 900px) {
    font-size: 3em;
    line-height: 1.5em;
    margin-top: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.5em;
    line-height: 1.5em;
    margin-top: 10px;
  }
`;

export const HomeFormBackground = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: center;
`;


