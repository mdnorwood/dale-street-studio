import React from 'react';
import { BannerContainer, BannerText, HeaderLineBreak } from './banner.styles';
import AudioMeter from './../../components/audio-meter-animation/audio-meter.component';

const Banner = () => {

  return (

    
  <BannerContainer>
   
    <BannerText>
              Subscribe for 1 free digital master <HeaderLineBreak />
              <div id="mc_embed_signup" style={{ marginTop: '25px', marginBottom: '25px' }}>
                  <a style={{ color: 'white', padding: '15px', fontSize: '30px', borderSize: '5px', borderColor: 'white', borderStyle: 'solid' }} href={'https://gmail.us7.list-manage.com/subscribe?u=daea54b2881619a66ef815217&id=53f71ba6a2'}>How can I help?</a>          
              </div>
    </BannerText>
  </BannerContainer>
  )
};

export default React.memo(Banner);