import React from 'react';
import { FooterContainer, FooterCopyrightContainer, FooterCopyrightText } from './footer.styles';

const Footer = () => {
    var d = new Date();
    var n = d.getFullYear();
    return (
        
        <FooterContainer>
            <center><FooterCopyrightContainer><FooterCopyrightText>&#169; {n} Dale Street Studio LLC</FooterCopyrightText></FooterCopyrightContainer></center>
        </FooterContainer>
    );
};

export default Footer;

