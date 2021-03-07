import React from 'react';
import { PageContainer, PageTitleOne, PageTitleTwo, PageText, PageAnchorTag } from '../global-page-styles/global-page-styles';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import {Helmet} from "react-helmet";

const AboutPage = (props) =>{

  return (
    <PageContainer>
    <Helmet>
        <title>About</title>
        <meta name="about" content="About Dale Street Studio, LLC" />
    </Helmet>
    <PageTitleOne className='date'>About</PageTitleOne>
    <PageTitleTwo>Description and Mission Statement:</PageTitleTwo>
    <PageText>Dale Street is a Mixing, Mastering, & Production studio in Colorado Springs, CO. As a DJ and musician, Marcus Dale Norwood started Dale Street Studio to represent his expanding studio, growing sound and 20+ years of experience in audio. As well as a bachelor's education in audio production and sound design. I'm now offering production, mixing & mastering services and enjoy helping artists succeed in their sound.
    </PageText>
    <PageTitleTwo>Booking:</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Let me know how you'd like me to help on your next project. Contact me today to get rates and book my services. Whether you're finalizing a track to playback on different streaming sources, needing a fresh master through some high quality hybrid digital and analog gear, need a new set of ears to mix on your home recorded project, or are working on a new production that you'd like to work with me on. I'd love to see how I can help. Check out my services here on the site, some of my past & recent work, then drop some info in the contact form. I'll get back to talk shop and get you on the schedule! 
    </PageText>
    <center><CustomButton style={{textAlign: 'center'}} onClick={() => props.history.push('/contact')}>Contact to Book Services</CustomButton> </center>
    </PageContainer>
  )
};




export default React.memo(AboutPage);