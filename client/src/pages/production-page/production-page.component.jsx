import React from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import CustomButton from '../../components/custom-button/custom-button.component';

const ProductionPage = (props) => {
  return (
    <div>
      <h1>Licensing Opportunities</h1>
      <h3>Non-Exclusive & Exclusive</h3>
      <p>See licensing contracts at DjDefinitionBeats.com for more details on lease agreement types. Contact me for more information or questions.</p>
      <center><a href={'https://djdefinitionbeats.com/'}><CustomButton style={{textAlign: 'center'}}><span style={{paddingRight: '10px'}} role="img" aria-label="contact">&#x1f4e9;</span>DjDefinitionBeats.com</CustomButton></a></center>
      <hr/>  
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
  </div>
  );
}


export default React.memo(ProductionPage);