import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { AltBannerContainer, AltBannerTextBackgroundGreen, AltBannerTextBackgroundYellow, AltBannerTextBackgroundRed, AltHeaderText, AltHeaderSubText } from './alt-banner.styles';

import { BannerText, HeaderLineBreak } from './banner.styles';

const AltBanner = () => {
    return (
        <AltBannerContainer>
          <AltBannerTextBackgroundRed>
            &nbsp;
          </AltBannerTextBackgroundRed>
          <AltBannerTextBackgroundYellow>
            &nbsp;
          </AltBannerTextBackgroundYellow>
          <AltBannerTextBackgroundGreen>
            <BannerText>
            <AltHeaderText>FRESH BEATS FOR SALE</AltHeaderText>
            <hr/>
            <AltHeaderSubText>
            Exclusive, Non-Exclusive, and NFT</AltHeaderSubText><br/>
            <Link to='/beats-for-sale'><CustomButton style={{fontSize: '30px'}}> Listen and Shop</CustomButton></Link>
            </BannerText>
          </AltBannerTextBackgroundGreen>
        </AltBannerContainer>
    );
};

export default AltBanner;

