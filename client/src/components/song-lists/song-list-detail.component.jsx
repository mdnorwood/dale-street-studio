import React from 'react';
import { Link } from 'react-router-dom';

const SongListDetail = props => {
  return (
    <div>
      <h1>Song List Detail Page: {props.match.params.detailId}</h1>
      <Link to='/'>Home</Link><br/>
      <Link to='/mastering-song-list'>Mastering Song List</Link>
      <button onClick={() => props.history.push('/mix')}>Mixing</button>
    </div>
  )
};

export default SongListDetail;