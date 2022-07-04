import React from 'react';
import '../Join/Join.css'

const Join = () => {
    return ( 
        <div className='join'>
            <div className='fun'>
                JOIN THE <span>FUN.</span> 
            </div>
            <div className='myForm'>
                <form action="">
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="email">Email:</label> <br />
                    <input type="text" /> <br />

                    <label htmlFor="password">Password:</label> <br />
                    <input type="text" /> <br /> <br />
                    <button>JOIN NOW</button>
                </form>
            </div>

        </div>
     );
}
 
export default Join;