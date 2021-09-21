import React from 'react';

import Directory from '../../components/directory/directory.component';
import Banner from '../../components/banner/banner.component';
import { Helmet } from "react-helmet";

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {

  

  return (
    
    <HomePageContainer>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Dale St. Studio | Home</title>
      <link rel='canonical' href='https://dalestreetstudio.com' />
      {/* multiple meta elements */}
      <meta name="description" content="Music Mastering, Mixing & Production services located in Colorado Springs, CO. Affordable rates and revisions. Quick turnaround. Contact or subscribe for booking! " />
      <meta name="thumbnail" content="http://example/DaleStreetStudio.png" />
    </Helmet>

      <Banner />
      <Directory />
    </HomePageContainer>
  );
}

export default HomePage;