import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import CustomButton from '../../components/custom-button/custom-button.component';

const ProductionPage = (props) => {
  return (
    <div>
      <h1>FRESH BEATS FOR SALE</h1>
      <h3>New @ BeatStars - Fresh Weekly Releases!</h3>
        <Iframe 
          url='https://player.beatstars.com/?storeId=122207'
          width='100%'
          height='800'
          id=''
          className=''
          display='initial'
          position='relative'
          sandbox=''
        />

        <center><a href={'http://eepurl.com/hyqpfb'}><CustomButton style={{textAlign: 'center'}}><span style={{paddingRight: '10px'}} role="img" aria-label="contact">&#x1f4e9;</span>Contact to Book Services</CustomButton></a></center>
      <CustomButton onClick={() => props.history.push('/')}>Home</CustomButton>
  </div>
  );
}


export default React.memo(ProductionPage);