import React from 'react';
import "../FirstSection/FirstSection.css"
import girl from '../image/girl.png'

const FirstSection = () => {
    return ( 
        <div className='sectionone'>
            <div className='girlImage'>
            <img src={girl} alt="" />
            </div>
            <div className='text'>
                <h2>Feel the Music</h2>
                <p>Stream over 20 thousand songs with one click</p>
                <button>JOIN NOW</button>

            </div>

        </div>
     );
}
 
export default FirstSection;