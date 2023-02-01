import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png"
import downArrow from "../../Assets/Vector.png"
import { AiOutlineSearch } from "react-icons/ai";


const Navbar = () => {
    return (
        <div className='py-3 row'>
            <div className='col'>
                <img src={logo} alt="" />
            </div>
            <div className='col position-relative'>
                <AiOutlineSearch className='position-absolute fs-5 text-gray mt-2 ms-3' />
                <input type="text" name="search" placeholder='Search for your favorite groups in ATG' id="" className='form-control rounded-pill px-5 bg-light' />
            </div>
            <div className='d-flex align-items-center justify-content-end text-end col'>
                <div>
                    <p>Create account. <Link to="/sing_up" className='text-blue fw-semibold text-decoration-none'>It’s free!</Link></p>
                </div>
                <div>
                    <img className='' src={downArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;