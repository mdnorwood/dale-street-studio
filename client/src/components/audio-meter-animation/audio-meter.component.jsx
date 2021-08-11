import React from 'react';
import './audio-meter.styles.css';

const AudioMeter = () => (
  <div className="meter-wrapper">
    <div className="meter-container">
      <div className="meter" id="meter1"></div>
    </div>
    <div className="level">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container">
      <div className="meter" id="meter2"></div>
    </div>
    <div className="level">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container">
      <div className="meter" id="meter3"></div>
    </div>
    <div className="level">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container">
      <div className="meter" id="meter4"></div>
    </div>
    <div className="level hide-meter">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container">
      <div className="meter" id="meter5"></div>
    </div>
    <div className="level">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container hide-meter">
      <div className="meter" id="meter6"></div>
    </div>
    <div className="level hide-meter">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container hide-meter">
      <div className="meter" id="meter7"></div>
    </div>
    <div className="level hide-meter">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container hide-meter">
      <div className="meter" id="meter8"></div>
    </div>
    <div className="level hide-meter">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container hide-meter">
      <div className="meter" id="meter9"></div>
    </div>
    <div className="level hide-meter">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

    <div className="meter-container hide-meter">
      <div className="meter" id="meter10"></div>
    </div>
    <div className="level hide-meter">
      <p>CLIP<br/>-3<br/>-6<br/>-10<br/>-14<br/>-18<br/>-26<br/>-32<br/>-41</p>
    </div>

  </div>
);

export default AudioMeter;