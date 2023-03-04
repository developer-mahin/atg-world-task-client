import React, { useEffect, useState } from 'react';
import { BsPenFill, BsShare, BsThreeDots } from 'react-icons/bs';
import { BiEditAlt } from "react-icons/bi"
import { TbMessageReport } from 'react-icons/tb';

const AllPost = () => {

    const [allPost, setAllPost] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/all-post")
            .then(res => res.json())
            .then(data => setAllPost(data))
    }, [])

    return (
        <div className='border rounded'>
            {
                allPost.map(post => <div key={post._id}>
                    <div>
                        <img src={post.image} className="w-100" alt="" />
                    </div>
                    <div className='p-4 post-container'>
                        <BsPenFill /> <span className='text-capitalize'>{post.postRole}</span>
                        <div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h3 className='mt-2'>{post.title}</h3>
                                <div class="dropdown">
                                    <button class="border-0 bg-body" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsThreeDots className='fs-4' />
                                    </button>
                                    <ul class="dropdown-menu">
                                        <button class="dropdown-item">Edit <BiEditAlt /></button>
                                        <button class="dropdown-item">Report <TbMessageReport /></button>
                                    </ul>
                                </div>
                            </div>
                            <p>{post.description && (post.description).slice(0, 150) + "..."}</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={post.userPhoto} width={60} height={60} className="rounded-pill object-fit-cover" alt="" />
                                    <h6>{post.userName}</h6>
                                </div>
                                <div className=''>
                                    <BsShare className='bg-secondary bg-opacity-25 p-2 fs-1 rounded cursor-pinter'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllPost;