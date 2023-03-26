import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';

const ProfileDataUpdateModal = ({ profileDataUpdateModal, customStyles, closeModal }) => {
    return (
        <div
            className='position-relative'>
            <Modal
                isOpen={profileDataUpdateModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='position-absolute top-0 end-0 p-2'>
                    <AiOutlineCloseCircle className='fs-2 close_button text-white' onClick={closeModal} />
                </div>
                <div className='mb-3'>
                    <div className='border-bottom border-secondary'>
                        <h4 className='fw-normal text-white text-opacity-75'>Edit intro</h4>
                    </div>
                    <div className='mt-4'>
                        <p className='text-white text-opacity-75 fw-medium m-0 pb-1 fs-5'>Basic info</p>
                        <form>

                            <div className='d-flex justify-content-between gap-3'>
                                <div className='mb-lg-2 w-100'>
                                    <label className='text-secondary mb-1'>First name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                        placeholder='First Name'
                                        id=""
                                    />
                                </div>

                                <div className='mb-lg-2 w-100'>
                                    <label className='text-secondary mb-1'>Last name *</label>
                                    <input
                                        type="text"
                                        name="LastName"
                                        className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                        placeholder='Last Name'
                                        id=""
                                    />
                                </div>
                            </div>

                            <div className='py-2 d-flex justify-between gap-3'>
                                <div className='w-100'>
                                    <label className='text-secondary mb-1'>Change profile *</label>
                                    <input
                                        type="file"
                                        name="profile"
                                        className='w-100 py-1 text-white'
                                        id=""
                                        accept="image/*"
                                    />
                                </div>
                                <div className='w-100'>
                                    <label className='text-secondary mb-1'>Change cover *</label>
                                    <input
                                        type="file"
                                        name="cover"
                                        className='w-100 py-1 text-white'
                                        id=""
                                        accept="image/*"
                                    />
                                </div>
                            </div>

                            <div className='mb-lg-2 py-1'>
                                <label className='text-secondary mb-1'>Headline *</label>
                                <input
                                    type="text"
                                    name="headline"
                                    className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                    placeholder='Headline'
                                    id=""
                                />
                            </div>

                            <div>
                                <p className='text-white text-opacity-75 fw-medium m-0 pb-1 fs-5'>Education</p>
                                <div className='mb-lg-2'>
                                    <label className='text-secondary mb-1'>Education *</label>
                                    <input
                                        type="text"
                                        name="education"
                                        className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                        placeholder='Education'
                                        id=""
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProfileDataUpdateModal;