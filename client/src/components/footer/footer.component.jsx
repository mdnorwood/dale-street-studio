import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  

`;

const FooterText = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Footer = () => {
    var d = new Date();
    var n = d.getFullYear();
    return (
        <center><FooterContainer><FooterText>&#169; {n}, dale st. studio</FooterText></FooterContainer></center>
    );
};

export default Footer;

