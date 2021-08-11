import React from 'react';
import { PageContainer, PageTitleOne, PageTitleTwo, PageText, PageAnchorTag } from '../global-page-styles/global-page-styles';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const MasteringPage = ({history, match}) => {
  return (
    <div> 
      <PageContainer>
      <Helmet>
        <title>Mastering</title>
        <meta name="Mastering" content="Hybrid mastering with Izotope Ozone9 for EQ, dynamic EQ, monitoring for Tonal Balance and LUFs, Izotope RX8 for pre-master cleanup and repair. Then through the Pure2 Mastering converter, SSL G-series compression, and Rupert Neve Designs Master Buss Processor to bring it all together for a hybrid digital/analog master" />
    </Helmet>
    <PageTitleOne className='date'>Mastering</PageTitleOne>
    <PageTitleTwo>Hybrid Mastering Chain</PageTitleTwo>
    <PageText>Hybrid mastering with Izotope Ozone9 for EQ, dynamic EQ, monitoring for Tonal Balance and LUFs, Izotope RX8 for pre-master cleanup and repair. Then through the Pure2 Mastering converter, SSL G-series compression, and Rupert Neve Designs Master Buss Processor to bring it all together for a hybrid digital/analog master.
    </PageText>
    <PageTitleTwo>Digital Side</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Taking advantage of Izotope and it's software of mixing and mastering software. Starting with some AI but only as a starting point. As I don't like to let Bots and algorithm do all of the work, but it can give a great starting point. Then I start to adjust and bring in more elements to the processing chain. Utilizing Izotopes great suite of mastering EQs and dymanic EQ. This is where it really gets it's digital shape coming together with a basic digital stereo master. Without pushing gain levels, limiting or compression to far on the digital side. Where I then like to take it out of the digital box and into the analog processing chain for that gooey analog compression, limiting and gain...
    </PageText>
    <PageTitleTwo>Analog Side </PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>I send the signal out of the Antelope Pure2 mastering conveter and through my analog chain. This creates a high quality DA/AD that I send back into it for the re-print. Allowing for a higher quality of conversion on your digital stereo master. Where I use the Rupert Neve Master Buss processor and the SSL G-series compression for all of it's goodness. Really bringing the track together with desired gain, compression and limiting. The Rupert Neve Master Buss processor uses a special type of limiting and gain. That can push the levels of limiting but without creating harshness in the top end transients that can usually come as a result of digital compression and limiting. Allowing the gain to bring the levels and LUFS to a great spot in a very natural sounding way. The RND MBP is the all-star.
    </PageText>
    <PageTitleTwo>LUFs and Tonal Balance</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>This is where monitoring is important. I use Izotope Insight 2 and Tonal Balance Control to ensure your master has the necessesary LUFs and Tonal Balance for your track. Comparing it to thousands of tracks to get the right tonal balance for your genre. I take screenshots of the monitored session to send as part of the mastering package. As well as Insight 2 monitoring allowing for the correct amount of LUFs for streaming vs. CD. Where I offer 2 final masters in my basic mastering packages. One for streaming at around -14 LUFs. So your track isn't limited or affected by streaming upload algorithms. As well as one for CD and Club mixes at around -8 LUFs for a hot mix.
    </PageText>
    <center><a href={'http://eepurl.com/hyqpfb'}><CustomButton style={{textAlign: 'center'}}><span style={{paddingRight: '10px'}} role="img" aria-label="contact">&#x1f4e9;</span>Contact to Book Services</CustomButton></a></center>
    </PageContainer>
      <p>
        <Link to={`${match.url}`} ></Link>
      </p>
      <button onClick={() => history.push('/')}>Home</button>
      <button onClick={() => history.push('/mastering-song-list')}>Mastering Comparison Playlist</button>
  </div>
  );
}


export default MasteringPage;