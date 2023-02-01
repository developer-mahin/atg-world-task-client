import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png"
import downArrow from "../../Assets/Vector.png"
import { AiOutlineSearch } from "react-icons/ai";
import ModalBody from '../Modal/ModalBody';


const Navbar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    return (
        <div className='d-none d-md-block'>
            <div className='py-3 row border-bottom'>
                <div className='col'>
                    <img src={logo} alt="" />
                </div>
                <div className='col position-relative'>
                    <AiOutlineSearch className='position-absolute fs-5 text-gray mt-2 ms-3' />
                    <input type="text" name="search" placeholder='Search favorite groups in ATG' id="" className='form-control rounded-pill px-5 bg-light' />
                </div>
                <div className='d-flex align-items-center justify-content-end text-end col'>
                    <div>
                        <p>Create account.
                            <Link
                                to="/sign_up"
                                className='text-blue fw-semibold text-decoration-none'
                                onClick={openModal}
                            >It’s free!</Link>
                        </p>

                        {/* Modal body */}
                        <ModalBody
                            modalIsOpen={modalIsOpen}
                            setIsOpen={setIsOpen}
                        ></ModalBody>
                    </div>
                    <div className='pb-3 ms-1'>
                        <img className='' src={downArrow} alt="" />
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Navbar;