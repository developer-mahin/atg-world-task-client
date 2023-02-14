import React, { useContext } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';

const PostModal = ({ postModalIsOpen, afterOpenModal, closeModal, customStyles }) => {

    const { user } = useContext(AUTH_CONTEXT)
    console.log(user)

    return (
        <div className='position-relative'>
            <Modal
                isOpen={postModalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='position-absolute top-0 end-0 p-2'>
                    <AiOutlineCloseCircle className='fs-2 close_button text-white' onClick={closeModal} />
                </div>
                <div className='mb-3'>
                    <div className='border-bottom border-secondary'>
                        <h4 className='text-white'>Create a post</h4>
                    </div>
                    <div className='d-flex justify-items-center align-items-center gap-2 mt-2'>
                        <div>
                            {/* {
                                user?.uid ? <>
                                    <img width={60} src={user?.photoURL} alt="" />
                                </> : <>
                                    <img width={60} src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="" />
                                </>
                            } */}
                            <img width={60} src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png" alt="" />
                        </div>
                        <div>
                            <h5 className='text-white'>{user.displayName}</h5>
                            <div>
                                <select name="" id="" className='form-control fw-semibold bg-black text-white'>
                                    <option value="article">Article</option>
                                    <option value="event">Event</option>
                                    <option value="education">Education</option>
                                    <option value="job">Job</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <textarea
                        className='bg-transparent text-white border-0 post-form py-3 px-3'
                        name=""
                        id=""
                        cols="70"
                        rows="3"
                        placeholder='What do you want to talk about?'
                    ></textarea>
                </form>
            </Modal>
        </div>
    );
};

export default PostModal;