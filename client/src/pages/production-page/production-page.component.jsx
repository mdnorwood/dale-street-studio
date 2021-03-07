import React from 'react';
import { Link } from 'react-router-dom';

const ProductionPage = (props) => {
  return (
    <div>
      <h1>Production Page</h1>
      <p>
        <Link to='/'>Home</Link>
        <Link to={`${props.match.url}`} ></Link>
      </p>
      <button onClick={() => props.history.push('/')}>Home</button>
      <button onClick={() => props.history.push('/mastering-song-list')}>Production Song List</button>
  </div>
  );
}


export default React.memo(ProductionPage);