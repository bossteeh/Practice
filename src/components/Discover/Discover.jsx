import React from 'react';
import Charts from '../image/Charts.png';
import Album from '../image/Album.png';
import More from '../image/More.png';
import Covers from '../image/Cover.png';
import '../Discover/Discover.css';

const Discover = () => {
  return (
    <div className="section">
      <div className='highlight'>
        <h2>Discover new music</h2>
        <div className="imgs">
          <img src={Charts} alt="" />
          <img src={Album} alt="" />
          <img src={More} alt="" />
        </div>
        <p>
          By Joining you can benefit by listening to the latest albums released
        </p>
      </div>
      <div className='cover'>
        <img src={Covers} alt="" />
      </div>
    </div>
  );
};

export default Discover;
