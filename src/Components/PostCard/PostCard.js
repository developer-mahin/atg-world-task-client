import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { BsPenFill, BsShare, BsThreeDots } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { GiGraduateCap } from 'react-icons/gi';
import { TbMessageReport } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {

    const { image, postRole, _id, title, description, userPhoto, userName, date } = post;


    const [seeAllDetails, setSeeAllDetails] = useState(false)
    const changeState = seeAllDetails === true ? false : true

    return (
        <div className="mt-3 border rounded">

            <div className='p-4 post-container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-2'>
                        <img src={userPhoto} width={60} height={60} className="rounded-pill object-fit-cover" alt="" />
                        <div>
                            <span className='d-block fw-medium'>{userName}</span>
                            <span>{date.slice(0, 10)}</span>
                        </div>
                    </div>
                    <div className=''>
                        <BsShare className='bg-secondary bg-opacity-25 p-2 fs-1 rounded cursor-pinter' />
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
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3 className='mt-2'>
                            {
                                postRole === "job" ? <>
                                    <Link className='text-black'
                                        to={`/post-details/${_id}`}>{title}</Link>
                                </>
                                    :
                                    <>
                                        <span className='text-black'
                                        >{title}</span>
                                    </>
                            }
                        </h3>
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
                    <p>
                        {
                            postRole === "job" ? <>
                                <p>{description && (description).slice(0, 150) + "..."}</p>
                            </> : <>
                                {
                                    changeState ? <>
                                        {description && (description).slice(0, 150) + "..."}
                                        <span
                                            onClick={() => setSeeAllDetails(!seeAllDetails)}
                                            className='ms-1 text-decoration-underline cursor-pinter'>
                                            See More
                                        </span>
                                    </> : <>
                                        {description}
                                        <span
                                            onClick={() => setSeeAllDetails(!seeAllDetails)}
                                            className='ms-1 text-decoration-underline cursor-pinter'>
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