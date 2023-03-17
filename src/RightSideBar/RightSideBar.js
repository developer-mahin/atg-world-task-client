import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import RightSideBarCard from './RightSideBarCard';

const RightSideBar = () => {

    const rightSideBarInfo = [
        { id: 1, image: "https://i.ibb.co/5FKH0ZF/1624162747433.jpg", name: "Cefalo Bangladesh Ltd", details: "Company | Information, Technology & Service" },
        { id: 2, image: "https://i.ibb.co/nj6V1P8/1557478665329.jpg", name: "Craftsmen", details: "Company | Information, Technology & Service" },
        { id: 3, image: "https://i.ibb.co/5586VtT/1567108127826.jpg", name: "DICE", details: "Company | Information" },
    ]


    return (
        <div className='border border-radius p-3 position-sticky stick-bar-top bg-white'>
            <p className='fw-semibold'>Add to your feed</p>
            {
                rightSideBarInfo.map(info => <RightSideBarCard key={info.id} info={info}></RightSideBarCard>)
            }
            <div className='d-flex align-items-center justify-content-center view-profile rounded'>
                <button className='btn d-flex align-items-center gap-1'>
                    <span className='fw-medium text-secondary text-base'>See All</span>
                    <BiRightArrowAlt className='fs-4 text-secondary icon' />
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;