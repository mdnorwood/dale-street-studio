import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/DaleStStudioLogo.svg';


export const MainHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 98%;

  @media screen and (max-width: 800px) {
      width: 100%;
    }
`;

export const HeaderContainer = styled.div`
  height: 130px;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    padding: 25px 0 25px 0;
    line-height: 1em;
    text-align: center;

    @media screen and (max-width: 800px) {
      padding: 0;
    }
`;

export const LogoMain = styled(Logo)`
  width: 100px;
  float: left;
  margin-right: 10px;

  

  @media screen and (max-width: 800px) {
      width: 50px;
      position: absolute;
      left: 45%;
    }
`;

export const LogoText = styled.h1`
  width: 800px;
  color: ${({ theme }) => theme.primaryLight};
  font-family: 'Zilla Slab Highlight', cursive;
  font-weight: 700;
  font-size: 3em;
  line-height: .6em;
  margin-top: 35px;
  text-align: left;

  @media screen and (max-width: 1100px) {
      font-size: 2em;
    }

  @media screen and (max-width: 800px) {
      display: none;
    }
`;

export const LogoSubText = styled.span`
  color: ${({ theme }) => theme.primaryLight};
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: .6em;
`;

export const OptionsContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
      display: none;
    }
`;

export const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryLight};

  @media screen and (max-width: 800px) {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    }
`;

export const SignOutAndInLink = styled(NavLink)`

  margin-top: 35px;
  padding: 10px 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryLight};

  @media screen and (max-width: 800px) {
    border: 1px solid white;
    margin-left:180px;
    margin-top: 0;
    position: absolute;
    right:70px;
    }
`;

export const SpecialText = styled.h1`
  color: ${({isActive}) => isActive ? 'red' : 'white'};
  font-size: 28px;
  padding:10px;
  border: ${({isActive}) => isActive ? '10px solid #27af6c' : '3px solid white'};
  display: none;

  @media screen and (max-width: 800px) {
      display: none;
    }
`;
