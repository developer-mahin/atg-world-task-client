import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import bannerImage from "../../Assets/Rectangle 2.png"

const Banner = () => {

    const bannerBackground = {
        backgroundImage: `linear-gradient(45deg, rgb(0 0 0 / 65%), rgb(0 0 0 / 45%)),url(https://archive.org/download/02-11-2016_Images_Images_page_1_HQ/19-images-7_kACPBns.jpg)`,
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