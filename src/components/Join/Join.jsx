import React from 'react';
import '../Join/Join.css'

const Join = () => {
    return ( 
        <div className='section'>
            <div className='fun'>
                JOIN THE <span>FUN</span> 
            </div>
            <div className='myForm'>
                <form action="">
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" /> <br />
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" /> <br />

                    <label htmlFor="password">Password</label> <br />
                    <input type="text" />
                </form>
            </div>

        </div>
     );
}
 
export default Join;