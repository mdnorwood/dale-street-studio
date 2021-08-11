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
    <PageTitleTwo>Description</PageTitleTwo>
    <PageText>Dale Street Studio is a multimedia studio. With a focus on audio production, mixing & mastering, and web dev. Owned and operated by musician, former Dj, studio and web engineer...Marcus D. Norwood. I'm a producer and artist at heart but I'm now also offering services to new potential clients. Have a BA in multimedia production and sound design. With a focus on web, audio and video.
    </PageText>
    <PageTitleTwo>Booking</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>
    Book for audio services. <strong><u>1 free master per new client.</u></strong> Revisions included in mix or mastering services.
    </PageText>
    <center><a href={'http://eepurl.com/hyqpfb'}><CustomButton style={{textAlign: 'center'}}><span style={{paddingRight: '10px'}} role="img" aria-label="contact">&#x1f4e9;</span>Book Audio Services</CustomButton></a></center>
    <PageTitleTwo>DjDefinitionBeats.com</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>
    I was a professional Dj/turntablist for well over a decade who went by the stagename of Dj Definition. I'm bringing back the name, not for Dj'ing clubs or anything like that, but as a producer and beat smith. Which I've never stopped doing on the side. Constantly making music. This is now a new hub for beats that I don't use for personal projects. Now offering them as Beat Leases/Licenses through the that store. I've also embedded the player and store into Dale Street Studio for quick access and listening.
    </PageText>
    <center><a href={'https://djdefinitionbeats.com/'}><CustomButton style={{textAlign: 'center'}}>Visit DjDefinitionBeats.com</CustomButton></a></center>
    <PageTitleTwo>Web Services</PageTitleTwo>
    <PageText>I've also spent 12 years as a web developer & designer. This custom React + Firebase site was created custom as a hub to branch out to all of my Dale Street Studio, LLC ventures. See the Web Services site for more information on design, development & support services.
    </PageText>
    <br/>
    <center><a href={'https://dale-street-studio.web.app/'}><CustomButton style={{textAlign: 'center'}}>Visit Web Services Site</CustomButton></a></center>
    <PageTitleTwo>BeatStyle Fashion & Apparel (coming soon)</PageTitleTwo>
    <PageText>BeatStyle Fashion & Apparel is a new eComm merchandise brand I'm currently in the process of starting with a premium domain I've aquired. BeatStyle.com The store is currently not active, nor is the URL, as I get the merchandise foundation built and legal processes worked out. This will be just one of the entities that Dale Street Studio, LLC manages under a seperate DBA Tradename.
    </PageText>
    </PageContainer>
  )
};




export default React.memo(AboutPage);