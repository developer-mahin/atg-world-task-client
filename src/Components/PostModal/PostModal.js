import React, { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import ImageUploading from 'react-images-uploading';
import { BsEmojiSmile, BsImage } from "react-icons/bs"
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'


const PostModal = ({ postModalIsOpen, afterOpenModal, closeModal, customStyles }) => {
    const { user } = useContext(AUTH_CONTEXT)
    const [selectPost, setSelectPost] = useState("")
    const [isPickerVisible, setIsPickerVisible] = useState(false)
    const [textArea, setTextArea] = useState("")
    const [currentEmoji, setCurrentEmoji] = useState("")


    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex, e) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const url = `https://api.imgbb.com/1/upload?key=b486f58b0681b7c344264f43dd69a0d8`;

    const handlePost = (e) => {
        e.preventDefault()
        const image = images[0].file

        const formData = new FormData()
        formData.append("image", image)


        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div
            className='position-relative'>
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
                            <img
                                width={60}
                                height={60}
                                src={
                                    user?.uid ? user?.photoURL
                                        :
                                        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                                }
                                className="rounded-pill object-fill-cover"
                                alt="" />
                        </div>
                        <div>
                            <h5 className='text-white'>{user?.displayName}</h5>
                            <div>
                                <select
                                    onChange={(e) => setSelectPost(e.target.value)}
                                    name=""
                                    id=""
                                    className='form-control fw-semibold bg-black text-white cursor-pointer'>
                                    <option value="select one">Select One...</option>
                                    <option value="article">Article</option>
                                    <option value="event">Event</option>
                                    <option value="education">Education</option>
                                    <option value="job">Job</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handlePost}>
                    <textarea
                        onChange={(e) => setTextArea(e.target.value)}
                        className='bg-transparent text-white border-0 post-form py-3 px-3 fs-5'
                        name=""
                        id=""
                        cols="70"
                        rows="3"
                        defaultValue={currentEmoji}
                        placeholder='What do you want to talk about?'
                    >
                    </textarea>


                    <>
                        <button
                            onClick={() => setIsPickerVisible(!isPickerVisible)}
                            className='bg-transparent'
                        >
                            <BsEmojiSmile className='text-white fs-3' />
                        </button>
                        <div className={isPickerVisible ? "d-block" : "d-none"}>
                            <Picker
                                data={data}
                                previewPosition="none"
                                onEmojiSelect={(e) => {
                                    setCurrentEmoji(e.native)
                                }} />
                        </div>
                    </>

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
                            }) => (
                                <div className="upload__image-wrapper">
                                    <button
                                        className='bg-transparent'
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        <BsImage className='text-white fs-3' />
                                    </button>
                                </div>
                            )}
                        </ImageUploading>
                    </div>

                    <div className='mt-3'>
                        <button
                            disabled={!textArea.length}
                            type='submit'
                            className={`${textArea.length ? "btn-primary" : "btn-secondary"} btn px-4 rounded-pill`}
                        >
                            Post
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default PostModal;