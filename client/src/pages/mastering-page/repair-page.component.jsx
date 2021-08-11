import React from 'react';
import { PageContainer, PageTitleOne, PageTitleTwo, PageText, PageAnchorTag } from '../global-page-styles/global-page-styles';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const RepairPage = ({history, match}) => {
  return (
    <div> 
      <PageContainer>
      <Helmet>
        <title>Cleanup & Repair</title>
        <meta name="Mastering" content="Hybrid mastering with Izotope Ozone9 for EQ, dynamic EQ, monitoring for Tonal Balance and LUFs, Izotope RX8 for pre-master cleanup and repair. Then through the Pure2 Mastering converter, SSL G-series compression, and Rupert Neve Designs Master Buss Processor to bring it all together for a hybrid digital/analog master" />
    </Helmet>
    <PageTitleOne className='date'>Cleanup, Restoration, and Repair</PageTitleOne>
    <PageTitleTwo>RX 8 Cleanup and Repair</PageTitleTwo>
    <PageText>RX 8 is the stuff of audio legends. I use it for my pre-masters and audio cleanup/repair sessions. The spectrogram gives detailed information about the audio well beyond the wav file. Allowing me to see unwanted frequencies like high pitched tones or low end sub harmonic issues. I'll run your track through RX8 before I start mastering. If you have a specific cleanup or repair issue you'd instead like handled, but not mastering the track, I can help there as well. See some examples below. 
    </PageText>
    <PageTitleTwo>Guitar and Vocals</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Need sliding sounds removed or unwanted amp bleeds fixed, that's no problem at all. Send me the stem track needing cleaned and I'll send back with a quick return so you can get back to producing or mixing yourself.
    </PageText>
    <PageTitleTwo>Podcast Voiceover</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Recorded a voiceover with pops, clicks or issues. Not a clean and up front signal. I can easily help with that. Quick turnaround so you can put the fixed podcase vocals back into your project.
    </PageText>
    <PageTitleTwo>Spectral Repairs</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>RX 8 can work wonders with Spectral Repair, converting sample rates to desired ranges, etc. Let me know what the issue is and I'll put the software through it's paces to fix your issue.
    </PageText>
    <PageTitleTwo>More</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>A good example I recently ran into with a guitar track that had an airy hiss that would push and pull into the track. Creating a wobbling affect to the guitar track with it's spectragram information. I was easily able to correct issue and place the guitar right back into the mix. Removing any noticeable trace of the issue at hand. Here's what that visually looked like... 
    </PageText>
    
    <center><a href={'http://eepurl.com/hyqpfb'}><CustomButton style={{textAlign: 'center'}}><span style={{paddingRight: '10px'}} role="img" aria-label="contact">&#x1f4e9;</span>Contact to Book Services</CustomButton></a></center>
    </PageContainer>
      <p>
        <Link to={`${match.url}`} ></Link>
      </p>
      <button onClick={() => history.push('/')}>Home</button>
  </div>
  );
}


export default RepairPage;