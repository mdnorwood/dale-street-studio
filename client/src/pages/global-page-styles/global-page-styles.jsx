import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* background-color: lightblue; */
  padding: 20px 15% 20px 15%;

  @media screen and (max-width: 800px) {
      max-width: 95%;
    }
`;

export const PageTitleOne = styled.h1`
  color: #ffffff; font-family: 'Lato', sans-serif; font-size: 54px; font-weight: 300; line-height: 58px; margin: 0 0 58px; 
`;

export const PageTitleTwo = styled.h2`
  color: #ffffff; font-family: 'Lato', sans-serif; font-size: 34px; font-weight: 100; line-height: 34px; text-align: left;
`;

export const PageText = styled.p`
  color: #adb7bd; font-family: 'Lucida Sans', Arial, sans-serif; font-size: 16px; line-height: 26px; margin: 0; text-align: left;
`;

export const PageAnchorTag = styled.a`
  color: #fe921f; text-decoration: underline;

  &:hover {
    color: #ffffff
  }
`;


export const FourColumnItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;