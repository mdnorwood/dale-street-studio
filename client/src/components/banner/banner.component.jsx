import React from 'react';

import { BannerContainer, BannerTextBackground, BannerText } from './banner.styles';


const Banner = () => (
  <BannerContainer>
    <BannerTextBackground>
      <BannerText>FRESH<br/>BEATS<br/>FOR SALE</BannerText>
    </BannerTextBackground>
  </BannerContainer>

);

export default React.memo(Banner);