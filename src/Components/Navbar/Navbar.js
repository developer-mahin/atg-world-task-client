import React, { useContext, useState } from 'react';
import logo from "../../Assets/logo.png"
import downArrow from "../../Assets/Vector.png"
import { AiOutlineSearch } from "react-icons/ai";
import ModalBody from '../Modal/ModalBody';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


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

    return (
        <div className='d-none d-md-block container px-2'>
            <div className='py-3 row border-bottom'>
                <div className='col'>
                    <img className='pt-2' src={logo} alt="" />
                </div>
                <div className='col position-relative pt-2'>
                    <AiOutlineSearch className='position-absolute fs-5 text-gray mt-2 ms-3' />
                    <input type="text" name="search" placeholder='Search favorite groups in ATG' id="" className='form-control rounded-psemiboldill px-5 bg-light' />
                </div>


                {
                    user?.uid ? <>

                        <div className='d-flex justify-content-end align-items-center text-end col'>

                            <div>
                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                    <div>
                                        <img width={"40px"} src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="" />
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
                                    <ul className="dropdown-menu">
                                        <li className=''>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <button onClick={handleLogOut} className="btn btn-blue dropdown-item w-75 rounded">Logout</button>
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