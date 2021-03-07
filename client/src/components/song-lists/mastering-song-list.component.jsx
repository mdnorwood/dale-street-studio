import React from 'react';

import{ Link } from 'react-router-dom';

const MasteringSongList = props => {
    return(
      <div>
        <h1>Mastered Track A/B Comparisons</h1>
        <Link to={`${props.match.url}/13`}>TO SONG 13</Link>
        <Link to={`${props.match.url}/17`}>TO SONG 17</Link>
        <Link to={`${props.match.url}/21`}>TO SONG 21</Link>
      </div>
    )
}

export default MasteringSongList;