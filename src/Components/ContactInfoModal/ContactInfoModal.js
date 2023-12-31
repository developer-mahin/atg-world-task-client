import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';


const ContactInfoModal = ({ contactInfoDataModal, customStyles, closeModalForInfo, profile, refetch }) => {

    const [loading, setLoading] = useState(false)

    const handleUpdateInfo = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const tag = form.tag.value;
        const website = form.website.value;
        const country = form.country.value;
        const city = form.city.value

        const info = {
            tag,
            website,
            country,
            city
        }

        fetch(`https://huntyourjob.vercel.app/edit-contact/${profile._id}`, {
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
                    toast.success("successfully update")
                    form.reset()
                    closeModalForInfo()
                    refetch()
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
                isOpen={contactInfoDataModal}
                onRequestClose={closeModalForInfo}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='position-absolute top-0 end-0 p-2'>
                    <AiOutlineCloseCircle className='fs-2 close_button text-white' onClick={closeModalForInfo} />
                </div>
                <div className='mb-3'>
                    <div className='border-bottom border-secondary'>
                        <h4 className='fw-normal text-white text-opacity-75'>Contact Info</h4>
                    </div>
                    <div className='mt-4'>
                        <form onSubmit={handleUpdateInfo}>

                            <div>
                                <p className='text-white text-opacity-75 fw-medium fs-5 m-0 pt-2'>Tagline</p>
                                <div className='mb-lg-2'>
                                    <label className='text-secondary mb-1'>Tag *</label>
                                    <input
                                        type="text"
                                        name="tag"
                                        className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                        placeholder='Tag'
                                        id=""
                                    />
                                </div>
                            </div>
                            <div>
                                <p className='text-white text-opacity-75 fw-medium fs-5 m-0 pt-2'>Website</p>
                                <div className='mb-lg-2'>
                                    <label className='text-secondary mb-1'>Website *</label>
                                    <input
                                        type="text"
                                        name="website"
                                        className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                        placeholder='Website'
                                        id=""
                                    />
                                </div>
                            </div>

                            <div>
                                <p className='text-white text-opacity-75 fw-medium fs-5 m-0 pt-2'>Location</p>
                                <div className='d-flex gap-3'>
                                    <div className='mb-lg-4 w-100'>
                                        <label className='text-secondary mb-1'>Country/Region *</label>
                                        <input
                                            type="text"
                                            name="country"
                                            className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                            placeholder='Country'
                                            id=""
                                        />
                                    </div>
                                    <div className='mb-lg-4 w-100'>
                                        <label className='text-secondary mb-1'>City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            className='w-100 border bg-transparent px-3 py-1 text-white rounded input-focus'
                                            placeholder='City'
                                            id=""
                                        />
                                    </div>
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

export default ContactInfoModal;
