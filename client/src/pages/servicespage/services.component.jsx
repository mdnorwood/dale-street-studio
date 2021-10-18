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
      <PageText style={{marginBottom: '45px'}}>Modern mastering with a hybrid chain. FIRST, taking advantage of AI combined with the human touch in Ozone 9. Using ears and eyes to get the frequency balance with reference & Tonal Balance Control. Using EQ and other dynamic tools in the Ozone chain to get the intial master on the digital side. Always monitoring with Insight 2 for the LUFs and true peak. As well dynamic range. SECOND, bringing it out of the box for a hybrid analog stereo chain through the Pure 2 mastering convertor, SSL G-series compression and the Rupert Neve Master Buss Processor for a re-print. Continuing to monitor with Insight 2. 
      <br/><br/>
      Giving you the best of both worlds on your digital stereo stem master. I provide 2 stereo master WAV files. 1 at roughtly -14 LUFs for streaming services like Spotify or YouTube. 1 at -8 LUFs for a more traditional hot master to CD or for the Club. While offering an additional service for vinyl masterering. Ensuring all is set for sending to the web for streaming or press for a physical copy.
      </PageText>
      <center><a href={'/mastering-info'}><CustomButton style={{textAlign: 'center'}}>See more</CustomButton></a></center>
      <PageTitleTwo>Stem Mixing & Vocal Tuning</PageTitleTwo>
      <hr/>
      <PageText>Modern mixing solutions for your recorded stems. Taking advantage of modern tools like Izotope's Neutron Advanced, Nectar Plus, and much more in the DAW. Including other modern plugins like a Maag 2 and more to get a well balanced mix with headroom on the master bus that's ready to go to the mastering engineer. Let me give your mix a new set of ears.
      </PageText>
      <br/>
      <PageText>High quality vocal mixing and turning with modern tools like Izotope's Nectar 3 Plus & Melodyne 5. Modern effects like Vocal Synth 2, Stutter Edit 2, and Neoverb, for FX. Let me help take your vocal mix to the next level with a high quality vocal processing chain.
      </PageText>
      <br/>
      <center><a href={'/mixing-info'}><CustomButton style={{textAlign: 'center'}}>See more</CustomButton></a></center>
      <PageTitleTwo>Cleanup and Repair with RX</PageTitleTwo>
      <hr/>
      <PageText style={{marginBottom: '45px'}}>Needing guitar takes cleaned up from slides and creaks? Pops or clicks removed from a vocal recording or voiceover? Need music stripped out of a track or song, leaving only vocals or vice versa for your sampler or mix. A hum or high pitched tone that was captured fully removed. How about a low quality podcast that needs it's spectral image repaired to give it a full sound? Let me know what you need to get repaired or cleaned up and I'll run it through the paces.
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