import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';
import ImageUploading from 'react-images-uploading';
import Modal from 'react-modal';


const ProfilePicModal = ({ changeProfilePicModal, refetch, profile, customStyles, closeProfilePicModal }) => {

    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([]);
    const maxNumber = 1;

    console.log(images.length)

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
    };



    const handleChangeProfilePic = (e) => {
        setLoading(true)
        e.preventDefault()
        const image = images[0].file
        const formData = new FormData()
        formData.append("image", image)

        const uri = `https://api.imgbb.com/1/upload?key=b486f58b0681b7c344264f43dd69a0d8`;

        fetch(uri, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const photo = {
                        image: data.data.display_url
                    }
                    fetch(`https://huntyourjob.vercel.app/change-profile-pic/${profile._id}`, {
                        method: "PATCH",
                        headers: {
                            authorization: `Bearer ${localStorage.getItem("access-token")}`,
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(photo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success("successfully changed profile pic")
                            setLoading(false)
                            closeProfilePicModal()
                            refetch()
                        })
                        .catch(error => {
                            toast.error(error.message)
                        })
                }
            })
    }



    return (
        <div className='position-relative'>
            <Modal
                isOpen={changeProfilePicModal}
                onRequestClose={closeProfilePicModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='position-absolute top-0 end-0 p-2'>
                    <AiOutlineCloseCircle className='fs-2 close_button text-white' onClick={closeProfilePicModal} />
                </div>
                <div className='p-lg-5'>
                    <h4 className='text-white text-opacity-75'>Profile Photo</h4>
                    <div className='py-2 d-flex justify-content-center align-items-center'>
                        <img
                            src={profile?.photo}
                            width={250}
                            height={250}
                            className="object-fit-cover rounded-circle"
                            alt=""
                        />
                    </div>
                </div>
                <form onSubmit={handleChangeProfilePic} className="">

                    <div className="App">
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                onImageUpload,
                                isDragging,
                                dragProps,
                                onImageRemoveAll
                            }) => (
                                // write your building UI
                                <div className="upload__image-wrapper d-flex justify-content-between">
                                    <div
                                        className='bg-transparent cursor-pointer'
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        <BsImage className='text-white fs-3' />
                                    </div>
                                    <div>
                                        <AiFillDelete onClick={onImageRemoveAll} className='text-white fs-3 cursor-pointer' />
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
                    </div>

                    <div className='float-end mt-3'>
                        <button
                            disabled={images.length === 0}
                            type="submit" className={`${images.length === 0 ? "btn-secondary" : "btn-primary"} btn px-4 rounded-pill`}>
                            {loading ? "Loading..." : "Save"}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ProfilePicModal;
