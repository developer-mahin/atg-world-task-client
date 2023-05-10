import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { FaRegUserCircle } from 'react-icons/fa';

const MyNetwork = () => {

    const fakeData = [
        { name: "Connectors", number: "140" },
        { name: "Contacts", number: "130" },
        { name: "Following & Followers", number: "8" },
        { name: "Groups", number: "8" },
        { name: "Events", number: "15" },
        { name: "Pages", number: "200" },
        { name: "Newsletters", number: "300" },
        { name: "HashTags", number: "50" },
    ]


    return (
        <div>
            <div className='border shadow position-sticky top-0 bg-white z-index'>
                <Navbar></Navbar>
            </div>
            <div className='mt-4'>
                <div className='container mx-auto px-3 row'>
                    <div className='col-md-4 border bg-secondary bg-opacity-10 p-4 rounded border'>

                        {
                            fakeData.map((data, i) => <div key={i} className='d-flex align-items-center justify-content-between py-2'>
                                <div className='d-flex align-items-center gap-2'>
                                    <div>
                                        <FaRegUserCircle className='fs-4 text-secondary' />
                                    </div>
                                    <div>
                                        <p className='m-0 fw-medium fs-5 text-secondary'>{data.name}</p>
                                    </div>
                                </div>
                                <p className='m-0 text-secondary fw-medium fs-5'>{data.number}</p>
                            </div>)
                        }

                    </div>
                    <div className='col-md-8'>
                        <div className='d-flex align-items-center justify-content-between border py-2 px-4'>
                        <p className='m-0 fw-semibold'>Invitations</p>
                        <p className='m-0 fw-semibold'>See All</p>
                        </div>
                        <div className='mt-2'>
                            <button className='w-100 border btn fw-medium'>See More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyNetwork;