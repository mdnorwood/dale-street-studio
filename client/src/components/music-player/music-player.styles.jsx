import styled from 'styled-components';
import CustomButton from './../custom-button/custom-button.component';

export const MusicPlayerButtonList = styled.div`
    position: fixed;
    bottom: 80px;
    left: 0;
    width: 100%; 
    z-index: 100;
    background-color: black;
    padding-top: 10px;


    @media screen and (max-width: 1200px) {
        position: fixed;
        top: 350px;
        left: 0;
        width: 100%; 
        z-index: 1000;
        bottom: 100%;
        background-color: transparent;
        padding-top: 10px;
    }

    @media screen and (max-width: 900px) and (orientation: landscape) {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%; 
        z-index: 1000;
        bottom: 100%;
        background-color: transparent;
        padding-top: 10px;
    }

    @media screen and (max-width: 800px) and (orientation: portrait) {
        position: fixed;
        top: 400px;
        left: 0;
        width: 100%; 
        z-index: 1000;
        bottom: 100%;
        background-color: transparent;
        padding-top: 10px;
    }

    @media screen and (max-width: 800px) and (orientation: landscape) {
        position: fixed;
        top: 100px;
        left: 0;
        width: 100%; 
        z-index: 1000;
        bottom: 100%;
        background-color: transparent;
        padding-top: 10px;
    }

    @media screen and (max-width: 600px) and (orientation: landscape) {
        position: fixed;
        top: 250px;
        left: 0;
        width: 100%; 
        z-index: 1000;
        background-color: transparent;
        padding-top: 10px;
    }


    @media screen and (max-width: 600px) and (orientation: portrait) {
        position: fixed;
        top: 250px;
        left: 0;
        width: 100%; 
        z-index: 1000;
        background-color: transparent;
        padding-top: 10px;
    }
`;




export const MusicPlayerListButton = styled(CustomButton)`
    margin: 10px;
    padding-bottom: 20px;
    border-radius: 25px;
  


    @media screen and (max-width: 1200px) {
        max-width: 30px;
    }

    @media screen and (max-width: 800px) {
        max-width: 30px;
        border-radius: 25px;
    }

    @media screen and (max-width: 600px) {
        max-width: 30px;
        border-radius: 25px;
    }
`;





