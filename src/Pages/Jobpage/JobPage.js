import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const JobPage = () => {
    return (
        <div className="">
            <div className='border shadow position-sticky top-0 bg-white z-index'>
                <Navbar></Navbar>
            </div>
            <div className='container mx-auto px-3'>
                <h1>Job</h1>
            </div>
        </div>
    );
};

export default JobPage;