import React from 'react';
import "../Home/Home.css"
import girl from '../image/girl.png'

const Home = () => {
    return ( 
        <div className='section'>
            <div className='girlImage'>
            <img src={girl} alt="" />
            </div>
            <div className='text'>
                <h2>Feel the Music</h2>
                <p>Stream over 20 thousand songs with one click</p>
                <button className='btn'>JOIN NOW</button>

            </div>

        </div>
     );
}
 
export default Home;