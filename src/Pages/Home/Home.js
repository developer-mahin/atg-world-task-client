import React, { useState } from 'react';
import ModalBody from '../../Components/Modal/ModalBody';
import PostModal from '../../Components/PostModal/PostModal';
import AllPost from './AllPost/AllPost';
import { ImPencil } from "react-icons/im"



const Home = () => {

    const [postModalIsOpen, setPostModalIsOpen] = useState(false);
    function openPostModal() {
        setPostModalIsOpen(true);
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

    return (
        <div className=''>
            <AllPost></AllPost>

            <div
                onClick={openPostModal}
                className='position-sticky mobile-post bg-secondary d-flex align-items-center justify-content-center fs-4 d-lg-none d-block'>
                <ImPencil />
            </div>

            <PostModal
                postModalIsOpen={postModalIsOpen}
                customStyles={customStyles}
                closeModal={closeModal}
            ></PostModal>

            <ModalBody
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
            ></ModalBody>
        </div>
    );
};

export default Home;