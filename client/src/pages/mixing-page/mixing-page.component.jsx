import React from 'react';
import { PageContainer, PageTitleOne, PageTitleTwo, PageText, PageAnchorTag } from '../global-page-styles/global-page-styles';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const MixingPage = ({match, history}) => {
  return (
    <div> 
      <PageContainer>
      <Helmet>
        <title>Mixing</title>
        <meta name="Mastering" content="Hybrid mastering with Izotope Ozone9 for EQ, dynamic EQ, monitoring for Tonal Balance and LUFs, Izotope RX8 for pre-master cleanup and repair. Then through the Pure2 Mastering converter, SSL G-series compression, and Rupert Neve Designs Master Buss Processor to bring it all together for a hybrid digital/analog master" />
        </Helmet>
        <PageTitleOne className='date'>Modern Mixing</PageTitleOne>
        <PageTitleTwo>Modern Processes Mixing Process</PageTitleTwo>
        <PageText>Using Nectar, Neutron, Melodyne 5, and other modern plugin tools to get the mix right. Not limited to them, but these modern tools are doing an amazing job in the DAW to get that initial mix. In addition using Tonal Balance Control 2 to ensure the mix is in the proper tonal range. I have all the tools available to ensure a proper mix. Whether in the box or bringing it out for some analog glue. As well as using proper monitoring. I'll make sure the mix goes out to the mastering engineer properly. First ensuring you get the mix you like with unlimited revisions. Contact me today!
        </PageText>
        <PageTitleTwo>Vocal Mixing & Tuning</PageTitleTwo>
        <PageText style={{marginBottom: '45px'}}>Need vocal mixing and/or tuning? Needing a chorus ehancement by bringing in harmonics and overtones? Utilizing modern techniques like Melodyne 5 & Nectar Plus for a high quality vocal. Needing pitch correction? Heavy or light auto-tuning, etc. I got you with modern techniques and tools. Giving the best of both worlds with a hands on approach along with fanstatic AI tools.
        </PageText>
        <PageTitleTwo>Drum Mixing</PageTitleTwo>
        <PageText style={{marginBottom: '45px'}}>A Drum Buss Mix pushed through the SSL G-series compression to take it to the next level. I also specialize in Break drum sampling, editing, etc. I can give your drums the punch you're looking for or fit it into the mix in a way that doesn't push to hard. Whatever you'd like.
        </PageText>
        <PageTitleTwo>Full Track and Album Mixing</PageTitleTwo>
        <PageText style={{marginBottom: '45px'}}>Needing the full track mixed or a full album that's been recorded? I can run things through Neutron Advanced. As well as other tools to give a modern and enhanced mix.
        </PageText>
        <PageTitleTwo>Exported Stems and high quality master Mix stereo wav</PageTitleTwo>
        <PageText style={{marginBottom: '45px'}}>All mixes come with exported stems and a final highquality stereo wav mix with some headroom at roughly -6 db or -18 LUFs. Without using final limiting, etc. Leaving that the mastering process as would be needed for a higher quality master. If you'd like me to master through my hybrid chain for a final master stereo wav, see my mastering page.
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


export default MixingPage;