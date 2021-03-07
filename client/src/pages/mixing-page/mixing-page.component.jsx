import React from 'react';
import { Link } from 'react-router-dom';

const MixingPage = (props) => {
  return (
    <div>
      <h1>Mixing Page</h1>
      <p>
        <Link to='/'>Home</Link>
        <Link to={`${props.match.url}`} ></Link>
      </p>
      <button onClick={() => props.history.push('/')}>Home</button>
      <button onClick={() => props.history.push('/mastering-song-list')}>Mastering Song List</button>
  </div>
  );
}


export default MixingPage;