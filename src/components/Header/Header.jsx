import React from 'react';
import '../Header/Header.css';
import logo from '.././image/logo.svg';

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        <p>SOUNDWAVE</p>
      </div>
      <div className='discover'>
        <p>Discover</p>
        <p>Join</p>
      </div>
    </nav>
  );
};

export default Header;
