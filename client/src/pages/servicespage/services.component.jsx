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
    <PageTitleTwo>Mixing & Vocal Tuning</PageTitleTwo>
    <PageText>Modern mixing solutions utilizing a hybrid analog and digital chain. Taking advantage of modern tools like Izotope's Neutron & Nectar 3 Plus, Melodyne 5, and much more in the DAW. Let me give your mix a new set of ears.
    </PageText>
    <PageTitleTwo>Stereo Hybrid Mastering</PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>Modern hybrid mastering with a hybrid chain. Taking advantage of AI and the human touch in Ozone 9. Utilizing, dynamic EQ, Tonal Balance Control Insight 2 to ensure all is right from the digital side. Then bringing it out of the box for a hybrid analog stereo chain through the Pure 2 mastering convertor, SSL G-series compression and the Rupert Neve Master Buss Processor for a re-print. Giving you the best of both worlds on your digital stereo stem master. I provide 3 stereo master files. 1 at roughtly -14 LUFs for streaming services like Spotify or YouTube. 1 at -8 LUFs for a more traditional hot master. That can be used for CD masters. As well as a master for vinyl. Ensuring all is set for sending to the press.
    </PageText>
    <PageTitleTwo>Cleanup and Repair </PageTitleTwo>
    <PageText style={{marginBottom: '45px'}}>What else is there to say but RX 8. This is the stuff legends are made of. Needing guitar takes cleaned up from slides and creaks? Pops? Need music stripped out leaving only vocals. A hum or high pitched tone fixed and removed. How about a low quality podcase or voiceover recording that needs it's spectral image repaired to give it a full sound? Let me know what you need to get repaired or cleaned up, I'll run it through the paces.
    </PageText>
    <center><CustomButton style={{textAlign: 'center'}} onClick={() => history.push('/contact')}>Book</CustomButton> </center>
    </PageContainer>
);

export default ServicesPage;