import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PostModal from '../../../Components/PostModal/PostModal';
import Spinner from '../../../Components/spinner/Spinner';
import { AUTH_CONTEXT } from '../../../Context/AuthProvider';
import ActivityPostCard from './ActivityPostCard/ActivityPostCard';

const Activities = () => {

    const [postModalIsOpen, setPostModalIsOpen] = useState(false);
    function openPostModal() {
        setPostModalIsOpen(true);
    }
    function closeModal() {
        setPostModalIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#000000",
            borderRadius: "8px",
            padding: "40px"
        },
    };

    const { user } = useContext(AUTH_CONTEXT)

    const { data: posts = [], isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`https://banao-project-server.vercel.app/user-post?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }



    return (
        <>
            {
                isLoading ? "Loading..." : <>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4>Activity</h4>
                            <div>
                                <button
                                    onClick={openPostModal}
                                    className='rounded-pill px-4 py-1 btn border-primary border-2 text-primary fw-semibold'>Create a post</button>
                                <PostModal
                                    postModalIsOpen={postModalIsOpen}
                                    customStyles={customStyles}
                                    closeModal={closeModal}
                                ></PostModal>
                            </div>
                        </div>
                        <div>
                            {
                                posts.slice(0, 2).map(post => <ActivityPostCard key={post._id} post={post} />)
                            }
                        </div>
                        <>
                            <Link to="/my-posts" className='text-center view-profile d-block py-2 text-black link-hover border rounded'>
                                <span className='me-1'>Show all activity</span>
                                <BsArrowRight className='fw-bold' />
                            </Link>
                        </>
                    </div>
                </>
            }
        </>
    );
};

export default Activities;