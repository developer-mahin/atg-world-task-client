import React, { useState } from 'react';
import { AiFillLike, AiOutlineCamera, AiOutlineGif, AiOutlinePlus } from "react-icons/ai";
import { BiCommentDots, BiEditAlt, BiSend } from 'react-icons/bi';
import { BsEmojiSmile, BsPenFill, BsThreeDots } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { GiGraduateCap } from 'react-icons/gi';
import { TbMessageReport } from 'react-icons/tb';



const PostCard = ({ post }) => {

    const { image, postRole, description, userPhoto, userName, date } = post;
    const [seeAllDetails, setSeeAllDetails] = useState(false)
    const changeState = seeAllDetails === true ? false : true

    return (
        <div className="mb-3 border rounded">
            <div className='p-4 post-container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={userPhoto} width={50} height={50} className="rounded-pill object-fit-cover" alt="" />
                        <div>
                            <span className='d-block fw-medium'>{userName}</span>
                            <span className='text-sm'>{date.slice(0, 10)}</span>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <div>
                            <button className='btn'>
                                <AiOutlinePlus className='rounded cursor-pointer me-1 icon' />
                                <span className='text-decoration-underline cursor-pointer text-base'>Follow</span>
                            </button>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className="dropdown">
                                <button className="border-0 bg-body" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='fs-4' />
                                </button>
                                <ul className="dropdown-menu">
                                    <button className="dropdown-item text-base">Edit <BiEditAlt /></button>
                                    <button className="dropdown-item text-base">Report <TbMessageReport /></button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    {
                        postRole === "education" && <GiGraduateCap className='me-1 fw-medium'></GiGraduateCap>
                    }
                    {
                        postRole === "job" && <CgWorkAlt className='me-1 fw-medium'></CgWorkAlt>
                    }
                    {
                        postRole === "article" && <BsPenFill className='me-1 fw-medium'></BsPenFill>
                    }
                    <span className='text-capitalize fw-medium'>{postRole}</span>
                </div>
                <div>

                    <p>
                        {
                            postRole === "job" ? <>
                                {
                                    description.length > 150 ? <>
                                        <p className='text-base'>{(description).slice(0, 150) + "..."}</p>
                                    </> : <>
                                        {
                                            description
                                        }
                                    </>
                                }
                            </> : <>
                                {
                                    changeState ? <>
                                        {
                                            description.length > 150 ? <span className='text-base'>
                                                {description && (description).slice(0, 150) + "..."}
                                            </span> : <span className='text-base'>
                                                {description}
                                            </span>
                                        }
                                        {
                                            description.length > 150 && <span
                                                onClick={() => setSeeAllDetails(!seeAllDetails)}
                                                className='ms-1 text-decoration-underline cursor-pointer text-base fw-medium'>
                                                See More
                                            </span>
                                        }
                                    </> : <>
                                        <span className='text-base'>{description}</span>
                                        <span
                                            onClick={() => setSeeAllDetails(!seeAllDetails)}
                                            className='ms-1 text-decoration-underline cursor-pointer fw-medium text-base'>
                                            See Less
                                        </span>
                                    </>
                                }
                            </>
                        }
                    </p>
                </div>
            </div>
            <div>
                <img src={image} className="w-100 h-auto" alt="" />
            </div>

            <div>
                <div className='px-3 d-flex align-items-center justify-content-between py-2'>
                    <div>
                        <span className='text-base'>You and 10 others</span>
                    </div>
                    <div>
                        <span className='text-base'>30 comments</span>
                    </div>
                </div>
                <div className='grid-system py-2 border-top'>
                    <button className='btn py-lg-3 py-2 px-lg-4 px-2 d-flex align-items-center gap-1 cursor-pointer view-profile'>
                        <AiFillLike className='icon' />
                        <span className='text-base'>Like</span>
                    </button>
                    <button className='btn py-lg-3 py-2 px-lg-4 px-2 d-flex align-items-center gap-1 cursor-pointer view-profile'>
                        <BiCommentDots className='icon' />
                        <span className='text-base'>Comment</span>
                    </button>
                    <button className='btn py-lg-3 py-2 px-lg-4 px-2 d-flex align-items-center gap-1 cursor-pointer view-profile'>
                        <BiSend className='icon' />
                        <span className='text-base'>Send</span>
                    </button>
                </div>
            </div>

            <div className='py-3 px-3 d-flex align-items-center gap-2'>
                <div className='d-flex align-items-center gap-3 w-100'>
                    <div className='w-75'>
                        <input
                            type="text"
                            name=""
                            placeholder='Write a comment'
                            id=""
                            required
                            className='bg-secondary bg-opacity-10  rounded-pill w-100 comment py-2 px-3'
                        />
                    </div>

                    <div className='grid-system gap-2'>
                        <div><BsEmojiSmile className='icon cursor-pointer' /></div>
                        <div><AiOutlineCamera className='icon cursor-pointer' /></div>
                        <div><AiOutlineGif className='icon cursor-pointer' /></div>
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary px-4 py-2 rounded-pill'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;