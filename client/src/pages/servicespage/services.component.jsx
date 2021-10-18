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
      <PageTitleTwo>Stereo Hybrid Mastering</PageTitleTwo>
      <hr/>
      <PageText style={{marginBottom: '45px'}}>Modern mastering with a hybrid chain. Taking advantage of AI + the human touch in Ozone 9. Utilizing, dynamic EQ, Tonal Balance Control Insight 2 to ensure all is right from the digital side. Then bringing it out of the box for a hybrid analog stereo chain through the Pure 2 mastering convertor, SSL G-series compression and the Rupert Neve Master Buss Processor for a re-print. Giving you the best of both worlds on your digital stereo stem master. I provide 3 stereo master WAV files. 1 at roughtly -14 LUFs for streaming services like Spotify or YouTube. 1 at -8 LUFs for a more traditional hot master to CD or for the Club. While offering an additional service for vinyl masters. Ensuring all is set for sending to the web or press.
      </PageText>
      <center><a href={'/mastering-info'}><CustomButton style={{textAlign: 'center'}}>See more</CustomButton></a></center>
      <PageTitleTwo>Mixing & Vocal Tuning</PageTitleTwo>
      <hr/>
      <PageText>Modern mixing solutions utilizing a hybrid analog and digital chain. Taking advantage of modern tools like Izotope's Neutron Advanced, NeoVerb and and much more in the DAW. Let me give your mix a new set of ears.
      </PageText>
      <br/>
      <PageText>High quality vocal mixing with modern tools like Izotope's Nectar 3 Plus & Melodyne 5. Modern effects like VocalSynth2.. Let me help take your vocal mix to the next level with a high quality vocal processing chain.
      </PageText>
      <br/>
      <center><a href={'/mixing-info'}><CustomButton style={{textAlign: 'center'}}>See more</CustomButton></a></center>
      <PageTitleTwo>Cleanup and Repair </PageTitleTwo>
      <hr/>
      <PageText style={{marginBottom: '45px'}}>Needing guitar takes cleaned up from slides and creaks? Pops or clicks removed from a vocal recording or voiceover? Need music stripped out of a track leaving only vocals or vice versa. A hum or high pitched tone that was captured fully removed. How about a low quality podcase that needs it's spectral image repaired to give it a full sound? Let me know what you need to get repaired or cleaned up, I'll run it through the paces.
      </PageText>
      <center><a href={'/repair-info'}><CustomButton style={{textAlign: 'center'}}>See more</CustomButton></a></center>
 
      <PageTitleTwo>Lease or buy a Beat. Fresh weekly releases.</PageTitleTwo>
      <hr/>
      <PageText style={{marginBottom: '45px'}}>Offering freshly curated beats on a weekly basis from the DjDefinitionBeats.com catelog. for non-exclusive and exclusive licensing. See contracts for more information on publishing copyright. Publisher vs. Writer copyrights and splits. Also, look for Dale Street Studio NFTs coming soon on OpenSea.io. Custom Production services also available by booking services.
      </PageText>
      <center><a href={'/beats-for-sale'}><CustomButton style={{textAlign: 'center'}}>See more</CustomButton></a></center>
      <br/>
      <PageTitleTwo>Book Services</PageTitleTwo>
      <hr/>
      <PageText style={{marginBottom: '45px'}}>Contact me for help on your project. 
      </PageText>
      <center><a href={'http://eepurl.com/hyqpfb'}><CustomButton style={{textAlign: 'center'}}><span style={{paddingRight: '10px'}} role="img" aria-label="contact">&#x1f4e9;</span>Book Services</CustomButton></a></center>
    </PageContainer>
);

export default ServicesPage;