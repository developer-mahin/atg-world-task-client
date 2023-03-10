import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { BiEditAlt } from 'react-icons/bi';
import { BsPenFill, BsThreeDots } from 'react-icons/bs';
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
                                <AiOutlinePlus className='rounded cursor-pointer me-1' />
                                <span className='text-decoration-underline cursor-pointer'>Follow</span>
                            </button>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className="dropdown">
                                <button className="border-0 bg-body" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsThreeDots className='fs-4' />
                                </button>
                                <ul className="dropdown-menu">
                                    <button className="dropdown-item">Edit <BiEditAlt /></button>
                                    <button className="dropdown-item">Report <TbMessageReport /></button>
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
                                        <p>{(description).slice(0, 150) + "..."}</p>
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
                                            description.length > 150 ? <span>
                                                {description && (description).slice(0, 150) + "..."}
                                            </span> : <span>
                                                {description}
                                            </span>
                                        }
                                        {
                                            description.length > 150 && <span
                                                onClick={() => setSeeAllDetails(!seeAllDetails)}
                                                className='ms-1 text-decoration-underline cursor-pointer fw-medium'>
                                                See More
                                            </span>
                                        }
                                    </> : <>
                                        {description}
                                        <span
                                            onClick={() => setSeeAllDetails(!seeAllDetails)}
                                            className='ms-1 text-decoration-underline cursor-pointer fw-medium'>
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

        </div>
    );
};

export default PostCard;