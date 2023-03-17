import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import ImageUploading from 'react-images-uploading';
import Modal from 'react-modal';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';


const PostModal = ({ postModalIsOpen, closeModal, customStyles, refetch }) => {
    const { user } = useContext(AUTH_CONTEXT)
    const [selectPost, setSelectPost] = useState("")
    const [isPickerVisible, setIsPickerVisible] = useState(false)
    const [textArea, setTextArea] = useState("")
    const [currentEmoji, setCurrentEmoji] = useState("")
    const [loading, setLoading] = useState(false)

    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex, e) => {
        setImages(imageList);
    };

    const date = new Date()

    const url = `https://api.imgbb.com/1/upload?key=b486f58b0681b7c344264f43dd69a0d8`;

    const handlePost = (e) => {
        setLoading(true)
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
                if (data.success) {
                    const postInfo = {
                        date,
                        description: textArea,
                        image: data.data.display_url,
                        postRole: selectPost,
                        userName: user?.displayName,
                        userPhoto: user?.photoURL
                    }
                    fetch("http://localhost:5000/add-post", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(postInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success("Successfully posted")
                            closeModal()
                            refetch()
                            setLoading(false)
                        })
                        .catch(error => {
                            toast.error(error.message)
                            setLoading(false)
                        })
                }
            })
    }

    return (
        <div
            className='position-relative'>
            <Modal
                isOpen={postModalIsOpen}
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
                                className="rounded-pill object-fit-cover"
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
                            className='bg-transparent btn'
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
                                    <div
                                        className='bg-transparent cursor-pointer'
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        <BsImage className='text-white fs-3' />
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
                    </div>

                    <div className='mt-5'>
                        <button
                            disabled={!textArea.length || !selectPost.length}
                            type='submit'
                            className={`${textArea.length || selectPost.length ? "btn-primary" : "btn-secondary"} btn px-4 rounded-pill`}
                        >
                            {
                                loading ? "Loading..." : "Post"
                            }
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default PostModal;