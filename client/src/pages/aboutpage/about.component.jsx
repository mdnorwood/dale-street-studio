import React from 'react';
import { PageContainer, PageTitleOne, PageTitleTwo, PageText, PageAnchorTag } from '../global-page-styles/global-page-styles';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import {Helmet} from "react-helmet";

const AboutPage = (props) =>{

  return (
    <PageContainer>
    <Helmet>
        <title>About</title>
        <meta name="about" content="About Dale Street Studio, LLC. & DjDefinitionBeats.com" />
    </Helmet>
    <PageTitleOne className='date'>About</PageTitleOne>
    <PageTitleTwo>Description</PageTitleTwo>
    <PageText>Dale Street Studio, LLC is a small boutique freelance audio studio in Colorado Springs, Colorado. Focused on mixing, mastering & audio repair. Helping clients and other musicians polish off their sound. Contact me today to see how I can help or take a look at one of my current beat lease/license opportunties currenlty available.
    </PageText>
    <PageText>
    As well as offering beat licensing opportunities for artists, tv, & film through DjDefinitionBeats.com. Contributing fresh weekly releases to those that would like to lease instrumentals. 
    </PageText>
    <PageTitleTwo>Booking</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>
    Book for audio services. <strong><u>1 free master per new client.</u></strong> Revisions included in mix or mastering services.
    </PageText>
    <center><a href={'http://eepurl.com/hyqpfb'}><CustomButton style={{textAlign: 'center'}}><span style={{paddingRight: '10px'}} role="img" aria-label="contact">&#x1f4e9;</span>Book Audio Services</CustomButton></a></center>
    <PageTitleTwo>DjDefinitionBeats.com</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>
    As a former Dj and producer with 21 years of experience, I'm now offering licensing opportunities here at the studio site and through BeatStars with my DjDefinitionBeats.com site.
    </PageText>
    <center><a href={'https://djdefinitionbeats.com/'}><CustomButton style={{textAlign: 'center'}}>Visit DjDefinitionBeats.com</CustomButton></a></center>
    </PageContainer>
  )
};




export default React.memo(AboutPage);