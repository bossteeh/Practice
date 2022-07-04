import React from 'react';
import '../Header/Header.css';
import logo from '.././image/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        <p>SOUNDWAVE</p>
      </div>
      <div className='discover'>
        <Link to={'home'}>Home</Link>
        <Link to={'discover'}>Discover</Link>
        <Link to={'join'}>Join</Link>
        
        

      </div>
    </nav>
  );
};

export default Header;
