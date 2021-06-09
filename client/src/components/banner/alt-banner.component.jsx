import React from 'react';
import { AltBannerContainer, AltBannerTextBackgroundGreen, AltBannerTextBackgroundYellow, AltBannerTextBackgroundRed } from './alt-banner.styles';

import { BannerText } from './banner.styles';

const AltBanner = () => {
    return (
        <AltBannerContainer>
          <AltBannerTextBackgroundRed>
            &nbsp;
          </AltBannerTextBackgroundRed>
          <AltBannerTextBackgroundYellow>
            &nbsp;<br/>&nbsp;
          </AltBannerTextBackgroundYellow>
          <AltBannerTextBackgroundGreen>
            &nbsp;
            <BannerText>Blog & YouTube Channel<br/>Coming Soon!</BannerText>
          </AltBannerTextBackgroundGreen>
        </AltBannerContainer>
    );
};

export default AltBanner;

