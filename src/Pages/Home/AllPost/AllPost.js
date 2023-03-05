import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BiEditAlt } from "react-icons/bi";
import { BsPenFill, BsShare, BsThreeDots } from 'react-icons/bs';
import { CgWorkAlt } from "react-icons/cg";
import { GiGraduateCap } from "react-icons/gi";
import { TbMessageReport } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const AllPost = () => {
    const { data: allPost = [], isLoading } = useQuery({
        queryKey: ["allPost"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/all-post")
            const data = await res.json()
            return data
        }
    })

    return (
        <>
            {
                isLoading ? <>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </> : <>
                    <div className='mb-3'>
                        {
                            allPost.map(post => <div key={post._id} className="mt-3 border rounded">
                                <div>
                                    <img src={post.image} className="w-100 object-fit-cover" height={400} alt="" />
                                </div>
                                <div className='p-4 post-container'>
                                    {
                                        post.postRole === "education" && <GiGraduateCap className='me-1'></GiGraduateCap>
                                    }
                                    {
                                        post.postRole === "job" && <CgWorkAlt className='me-1'></CgWorkAlt>
                                    }
                                    {
                                        post.postRole === "article" && <BsPenFill className='me-1'></BsPenFill>
                                    }
                                    <span className='text-capitalize'>{post.postRole}</span>
                                    <div>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h3 className='mt-2'> <Link className='text-black' to={`/post-details/${post._id}`}>{post.title}</Link> </h3>
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
                                        <p>{post.description && (post.description).slice(0, 150) + "..."}</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center gap-2'>
                                                <img src={post.userPhoto} width={60} height={60} className="rounded-pill object-fit-cover" alt="" />
                                                <div>
                                                    <h6>{post.userName}</h6>
                                                    <span>{post.date.slice(0, 10)}</span>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <BsShare className='bg-secondary bg-opacity-25 p-2 fs-1 rounded cursor-pinter' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </>
            }
        </>
    );
};

export default AllPost;