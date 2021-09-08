import React from 'react';
import { BannerContainer, BannerText, HeaderLineBreak } from './banner.styles';
import CustomButton from '../custom-button/custom-button.component';
import AudioMeter from './../../components/audio-meter-animation/audio-meter.component';
import MailchimpSubscribeForm from '../mailchimp-form/mailchimp-subscribe-form.component';

const Banner = () => {

  return (

    
  <BannerContainer>
    <AudioMeter />
    <BannerText>
              Subscribe for 1 free digital master & booking rates.
              <div id="mc_embed_signup">
                <MailchimpSubscribeForm />
              </div>
    </BannerText>
  </BannerContainer>
  )
};

export default React.memo(Banner);