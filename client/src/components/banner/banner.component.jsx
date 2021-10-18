import React from 'react';
import { BannerContainer, BannerText, HeaderLineBreak, SubscribeButton } from './banner.styles';
import AudioMeter from './../../components/audio-meter-animation/audio-meter.component';

const Banner = () => {

  return (

    
  <BannerContainer>
   
    <BannerText>
              Subscribe for 1 free digital master <HeaderLineBreak />
              <div id="mc_embed_signup" style={{ marginTop: '25px', marginBottom: '25px' }}>
                  <SubscribeButton className='button-subscribe' href={'https://gmail.us7.list-manage.com/subscribe?u=daea54b2881619a66ef815217&id=53f71ba6a2'}>How can I help?</SubscribeButton>          
              </div>
    </BannerText>
  </BannerContainer>
  )
};

export default React.memo(Banner);