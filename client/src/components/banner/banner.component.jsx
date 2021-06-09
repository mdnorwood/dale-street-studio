import React from 'react';
import { BannerContainer, BannerText, HeaderLineBreak } from './banner.styles';
import AudioMeter from './../../components/audio-meter-animation/audio-meter.component';
import MailchimpSubscribeForm from '../mailchimp-form/mailchimp-subscribe-form.component';


const Banner = () => {

  return (

    
  <BannerContainer>
    <AudioMeter />
      <BannerText>Subscribe to get free<HeaderLineBreak /> non-exclusive Beat pack  or Master</BannerText>
        <div id="mc_embed_signup">
          <MailchimpSubscribeForm />
        </div>
  </BannerContainer>
  )
};

export default React.memo(Banner);