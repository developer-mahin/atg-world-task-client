import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';

const ProfileDataUpdateModal = ({ profileDataUpdateModal, customStyles, closeModal, profile, refetch }) => {


    const [loading, setLoading] = useState(false)

    const handleEditInfo = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.LastName.value;
        const headline = form.headline.value;
        const education = form.education.value;

        const fullName = firstName + " " + lastName


        const info = {
            name: fullName,
            headline,
            education
        }

        fetch(`https://huntyourjob.vercel.app/edit-info/${profile._id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    closeModal()
                    form.reset()
                    refetch()
                    toast.success("successfully update profile")
                    setLoading(false)
                }
            })
            .catch(error => {
                toast.error(error.message)
            })


    }




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
                        <form onSubmit={handleEditInfo}>

                            <div className='d-flex justify-content-between gap-3'>
                                <div className='mb-lg-2 w-100'>
                                    <label className='text-secondary mb-1'>First name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                        placeholder='First Name'
                                        id=""
                                        required
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
                                        required
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
                                    required
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
                                        required
                                    />
                                </div>
                            </div>

                            <div className='float-end mt-3'>
                                <button type="submit" className='btn btn-primary px-3 rounded-pill'>
                                    {loading ? "Loading..." : "Save"}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProfileDataUpdateModal;
