import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdGroupAdd } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';
import downArrow from "../../Assets/Vector.png";
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import ModalBody from '../Modal/ModalBody';
import PostModal from '../PostModal/PostModal';

const MenuBar = () => {
    let subtitle;
    const [postModalIsOpen, setPostModalIsOpen] = useState(false);
    function openPostModal() {
        setPostModalIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
    function closeModal() {
        setPostModalIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#000000",
            borderRadius: "8px",
            padding: "40px"
        },
    };


    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    const { user, logOut } = useContext(AUTH_CONTEXT)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("user successfully loged out")
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }



    return (
        <div className='mt-5 mb-3 container row'>
            <div className='d-flex align-items-center gap-2 col-7 col-md-7'>
                <Link className='text-decoration-none text-black fw-semibold mx-2' to="/">All Posts(32)</Link>
                <div className='d-none d-md-block'>
                    <Link className='text-decoration-none text-secondary mx-2' to="/">Article</Link>
                    <Link className='text-decoration-none text-secondary mx-2' to="/">Event</Link>
                    <Link className='text-decoration-none text-secondary mx-2' to="/">Education</Link>
                    <Link className='text-decoration-none text-secondary mx-2' to="/">Job</Link>
                </div>
            </div>
            <div className='col-5 col-md-5 d-flex align-items-center justify-content-end gap-2'>
                <div className='d-none d-md-block'>
                    <button
                        className='border btn d-flex align-items-center gap-1 bg-secondary bg-opacity-25 py-2 px-3'
                        onClick={openPostModal}>
                        <span className='fw-medium'>Write a post </span>
                        <div className=''>
                            <img className='' src={downArrow} alt="" />
                        </div>
                    </button>
                    <PostModal
                        postModalIsOpen={postModalIsOpen}
                        customStyles={customStyles}
                        afterOpenModal={afterOpenModal}
                        closeModal={closeModal}
                    ></PostModal>
                </div>
                <div className='d-none d-md-block'>
                    {
                        user?.uid ? <>
                            <button onClick={handleLogOut} className='border btn btn-blue d-flex align-items-center gap-2'>
                                <TbLogout className='fs-3' />
                                <span className='fw-semibold'>Leave Group</span>
                            </button>

                        </> : <>
                            <button onClick={openModal} className='border btn btn-blue d-flex align-items-center gap-2'>
                                <MdGroupAdd className='fs-3' />
                                <span className='fw-semibold'>Join Group</span>
                            </button>
                        </>
                    }
                    <ModalBody
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                    ></ModalBody>
                </div>

                <div className='d-block d-md-none'>
                    <div className="dropdown">
                        <button className="border btn d-flex align-items-center gap-1 bg-secondary bg-opacity-25 py-2 px-3 dropdown-toggle fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Filter: All</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/">Article</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/">Education</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/">Event</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/">Job</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;