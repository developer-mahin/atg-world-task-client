import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const Banner = () => {

    const bannerBackground = {
        backgroundImage: `linear-gradient(45deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 45%)),url(https://i.ibb.co/5LXYTjt/Rectangle-2.png)`,
        width: "100%",
        height: "66vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "71px 0px"
    };



    return (
        <div style={bannerBackground} className="position-relative">
            <div className='container'>
                <div className='d-block d-md-none'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <AiOutlineArrowLeft className='text-white fs-1' />
                        </div>
                        <div>
                            <button className='rounded btn border text-white fw-medium'>Join Group</button>
                        </div>
                    </div>
                </div>
                <div className='position-absolute bottom-0 text-white pb-5'>
                    <h2>Computer Engineering</h2>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;