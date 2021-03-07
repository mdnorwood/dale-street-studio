import React from 'react';
import { PageContainer, PageTitleOne, PageTitleTwo, PageText, PageAnchorTag } from '../global-page-styles/global-page-styles';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import {Helmet} from "react-helmet";

const ServicesPage = ({history}) => (
   <PageContainer>
      <Helmet>
        <title>Services</title>
        <meta name="Services" content="Studio services include beats and production, mixing, mastering & audio repair." />
    </Helmet>
    <PageTitleOne className='date'>Services</PageTitleOne>
    <PageTitleTwo>Beats</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Producing since 1999, I specialize in boom bap, but I can also produce 808 and other more modern styles. Listen to my catelog. Purchase a  
    </PageText>
    <center><CustomButton style={{textAlign: 'center'}} onClick={() => history.push('/')}>Home</CustomButton> </center>
    <PageTitleTwo>Mixing</PageTitleTwo>
    <PageText>Modern mixing solutions utilizing  
    </PageText>
    <center><CustomButton style={{textAlign: 'center'}} onClick={() => history.push('/')}>Home</CustomButton> </center>
    <PageTitleTwo>Mastering</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Let me know how you'd like me to help on your next roject. Contact me today to get rates and book my services. Whether you're finalizing a track to playback on different streaming sources, needing a fresh master through some high quality hybrid digital and analog gear, need a new set of ears to mix on your home recorded project, or are working on a new production that you'd like to work with me on. I'd love to see how I can help. Check out my services here on the site, some of my past & recent work, then drop some info in the contact form. I'll get back to talk shop and get you on the schedule! 
    </PageText>
    <center><CustomButton style={{textAlign: 'center'}} onClick={() => history.push('/')}>Home</CustomButton> </center>
    <PageTitleTwo>Repair</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Let me know how you'd like me to help on your next roject. Contact me today to get rates and book my services. Whether you're finalizing a track to playback on different streaming sources, needing a fresh master through some high quality hybrid digital and analog gear, need a new set of ears to mix on your home recorded project, or are working on a new production that you'd like to work with me on. I'd love to see how I can help. Check out my services here on the site, some of my past & recent work, then drop some info in the contact form. I'll get back to talk shop and get you on the schedule! 
    </PageText>
    <center><CustomButton style={{textAlign: 'center'}} onClick={() => history.push('/')}>Home</CustomButton> </center>
    </PageContainer>
);

export default ServicesPage;