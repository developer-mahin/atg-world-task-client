import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const MyNetwork = () => {
    return (
        <div>
            <div className='border shadow position-sticky top-0 bg-white z-index'>
                <Navbar></Navbar>
            </div>
            <div className='container mx-auto px-3'>
                <h1>My Network</h1>
            </div>

        </div>
    );
};

export default MyNetwork;