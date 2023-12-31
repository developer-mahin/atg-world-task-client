import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';
import PostCard from '../../../../Components/PostCard/PostCard';
import Spinner from '../../../../Components/spinner/Spinner';
import { AUTH_CONTEXT } from '../../../../Context/AuthProvider';
import LeftSideBar from '../../../../LeftSideBar/LeftSideBar';

const AllActivityPost = () => {

    const { user } = useContext(AUTH_CONTEXT)

    const { data: posts = [], isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await fetch(`https://huntyourjob.vercel.app/user-post?email=${user?.email}`, {
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
            <div className='border shadow position-sticky top-0 bg-white z-10 position-relative'>
                <Navbar></Navbar>
            </div>
            <div className='w-1000 mx-auto row'>
                <div className='col-md-4'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='col-md-8 mt-2'>
                    {
                        posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllActivityPost;
