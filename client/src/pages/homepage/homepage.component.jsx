import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { db } from '../../firebase/firebase.utils';


import Directory from '../../components/directory/directory.component';
import Banner from '../../components/banner/banner.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {

  

  return (
    <HomePageContainer>
      <Banner />
      <Directory />
      
    </HomePageContainer>
  );
}

export default HomePage;