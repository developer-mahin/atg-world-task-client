import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostModal from '../PostModal/PostModal';
import downArrow from "../../Assets/Vector.png"
import { MdGroupAdd } from "react-icons/md";

const MenuBar = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    return (
        <div className='mt-5 mb-3 container row'>
            <div className='d-flex align-items-center gap-2 col-8'>
                <Link className='text-decoration-none text-black fw-semibold mx-2' to="/">All Posts(32)</Link>
                <Link className='text-decoration-none text-secondary mx-2' to="/">Article</Link>
                <Link className='text-decoration-none text-secondary mx-2' to="/">Event</Link>
                <Link className='text-decoration-none text-secondary mx-2' to="/">Education</Link>
                <Link className='text-decoration-none text-secondary mx-2' to="/">Job</Link>
            </div>
            <div className='col-4 d-flex align-items-center gap-2'>
                <div>
                    <button
                        className='border btn d-flex align-items-center gap-1 bg-secondary bg-opacity-25 py-2 px-3'
                        onClick={openModal}>
                        <span className='fw-medium'>Write a post </span>
                        <div className=''>
                            <img className='' src={downArrow} alt="" />
                        </div>
                    </button>
                    <PostModal
                        modalIsOpen={modalIsOpen}
                        customStyles={customStyles}
                        afterOpenModal={afterOpenModal}
                        closeModal={closeModal}
                    ></PostModal>
                </div>
                <div>
                    <button className='border btn btn-blue d-flex align-items-center gap-2 py-2 px-3'>
                        <MdGroupAdd className='fs-3'/>
                        <span className='fw-semibold'>Join Group</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;