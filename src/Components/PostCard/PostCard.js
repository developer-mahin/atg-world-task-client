import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillLike, AiOutlineCamera, AiOutlineGif, AiOutlinePlus } from "react-icons/ai";
import { BiCommentDots, BiEditAlt, BiSend } from 'react-icons/bi';
import { BsEmojiSmile, BsPenFill, BsThreeDots } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { GiGraduateCap } from 'react-icons/gi';
import { TbMessageReport } from 'react-icons/tb';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';


const PostCard = ({ post, refetch }) => {

    const { image, postRole, description, userPhoto, userName, date, _id, comment, userId, like } = post;
    const [seeAllDetails, setSeeAllDetails] = useState(false)
    const changeState = seeAllDetails === true ? false : true
    const [commentData, setCommentData] = useState("")
    const { user } = useContext(AUTH_CONTEXT)
    const sortingLike = like?.filter(number => number > 0)


    // resetting the file input
    const handleFileChange = (event) => {
        event.target.value = null;
    };

    const { data: profile = {} } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const res = await fetch(`https://huntyourjob.vercel.app/profile?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })
    const { name, photo } = profile;


    const handleComment = (id) => {

        const commentInfo = {
            comment: commentData,
            userName: name,
            userPhoto: photo,
        }
        fetch(`https://huntyourjob.vercel.app/comment/${id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(commentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("successfully comment added")
                    refetch()
                }
            })
    }



    const [likes, setLikes] = useState(1);
    const [isClicked, setIsClicked] = useState(true);

    const handleLike = (id) => {

        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(0);
        }
        setIsClicked(!isClicked);

        const like = {
            likes
        }

        fetch(`https://huntyourjob.vercel.app/like/${id}`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(like)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }





    return (
        <div className="mb-3 border rounded">
            <div className='p-4 post-container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-2'>
                        <Link to={`/user-details/${userId}`}>
                            <img src={userPhoto} width={50} height={50} className="rounded-pill object-fit-cover" alt="" />
                        </Link>
                        <div>
                            <Link to={`/user-details/${userId}`} className='d-block fw-medium text-black text-decoration-none hover-decoration hover-text-blue'>{userName}</Link>
                            <span className='text-sm'>{date?.slice(0, 10)}</span>
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
                                    description?.length > 150 ? <>
                                        <p className='text-base'>{(description)?.slice(0, 150) + "..."}</p>
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
                                                {description && (description)?.slice(0, 150) + "..."}
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
                <PhotoProvider>
                    <PhotoView className="w-100 h-auto cursor-pointer" src={image}>
                        <img className="w-100 h-auto cursor-pointer" src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>

            <div>
                <div className='px-3 d-flex align-items-center justify-content-between py-2'>
                    <div>
                        <span className='text-base'>
                            {!like?.length ? `0 Like` : sortingLike.length + " " + "Likes"}
                        </span>
                    </div>
                    <div>
                        <span className='text-base'>{comment?.length ? comment?.length : "0"} comments</span>
                    </div>
                </div>
                <div className='grid-system py-2 border-top'>

                    <button
                        onClick={() => handleLike(_id)}
                        className='btn py-lg-3 py-2 px-lg-4 px-2 d-flex align-items-center gap-1 cursor-pointer view-profile'>
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

            <div
                className='py-3 px-3 d-flex align-items-center gap-2'>
                <div className='d-flex align-items-center gap-3 w-100'>
                    <div className='w-75'>
                        <input
                            onChange={(e) => setCommentData(e.target.value)}
                            onBlur={handleFileChange}
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
                    <button
                        disabled={commentData.length === 0}
                        onClick={() => handleComment(_id)}
                        className='btn btn-primary px-4 py-2 rounded-pill'
                    >Send</button>
                </div>
            </div>


            <div className='px-3'>
                {
                    comment?.map((data, index) => <div
                        key={index}
                        className="my-3 d-flex gap-3"
                    >
                        <div>
                            <img
                                className='object-fit-cover rounded-pill'
                                src={data?.userPhoto}
                                width={45}
                                height={45}
                                alt=""

                            />
                        </div>
                        <div className='p-3 bg-secondary bg-opacity-10 rounded w-100'>
                            <h6 className='m-0'>{data?.userName}</h6>
                            <p className='m-0 pt-1 text-sm'>{data?.comment}</p>
                        </div>

                    </div>)
                }
            </div>

        </div >
    );
};

export default PostCard;
