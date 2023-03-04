import React, { useContext, useState } from 'react';
import logo from "../../Assets/logo.png"
import downArrow from "../../Assets/Vector.png"
import { AiOutlineSearch } from "react-icons/ai";
import ModalBody from '../Modal/ModalBody';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi"


const Navbar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    const { user, logOut } = useContext(AUTH_CONTEXT)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User successfully loged out")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    console.log(user)

    return (
        <div className='d-none d-md-block container px-2'>
            <div className='py-3 row border-bottom'>
                <div className='col'>
                    <img className='pt-2' src={logo} alt="" />
                </div>
                <div className='col position-relative pt-2'>
                    <AiOutlineSearch className='position-absolute fs-5 text-gray mt-2 ms-3' />
                    <input type="text" name="search" placeholder='Search favorite groups in ATG' id="" className='form-control rounded-pill px-5 bg-light' />
                </div>


                {
                    user?.uid ? <>

                        <div className='d-flex justify-content-end align-items-center text-end col'>

                            <div>
                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                    <div>
                                        <img
                                            width={"40px"}
                                            height={"40px"}
                                            src={
                                                user?.uid
                                                    ?
                                                    user?.photoURL
                                                    :
                                                    "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                                            }
                                            className="rounded-pill object-fit-cover"
                                            alt="" />
                                    </div>
                                    <div className='mt-3'>
                                        <p className='fw-semibold'>{user?.displayName}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="dropdown">
                                    <button className="dropdown-toggle border-0 bg-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu py-2">
                                        <li className='ps-3'>
                                            <Link to="/" className='text-decoration-none text-black ps-1'>Profile</Link>
                                        </li>
                                        <li className=''>
                                            <div className=''>
                                                <button onClick={handleLogOut} className="dropdown-item w-75 rounded d-flex gap-1 align-items-center">
                                                    <BiLogOut />
                                                    <span>Logout</span>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </> : <>
                        <div className='d-flex align-items-center justify-content-end text-end col'>
                            <div className='mt-2'>
                                <p>Create account.
                                    <span
                                        className='text-blue fw-semibold text-decoration-none cursor-pinter'
                                        onClick={openModal}
                                    >It’s free!</span>
                                </p>

                                {/* Modal body */}
                                <ModalBody
                                    modalIsOpen={modalIsOpen}
                                    setIsOpen={setIsOpen}
                                ></ModalBody>
                            </div>
                            <div className='pb-2 ms-1'>
                                <img className='' src={downArrow} alt="" />
                            </div>
                        </div>
                    </>
                }

            </div>
        </div >
    );
};

export default Navbar;