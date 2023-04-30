import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PostCard from '../../../Components/PostCard/PostCard';
import Spinner from '../../../Components/spinner/Spinner';


const AllPost = () => {

    const { data: allPost = [], isLoading, refetch } = useQuery({
        queryKey: ["allPost"],
        queryFn: async () => {
            const res = await fetch("https://banao-project-server.vercel.app/all-post", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })


    return (
        <>
            {
                isLoading ? <>
                    <Spinner></Spinner>
                </> : <>
                    <div className='mb-3'>
                        {
                            allPost?.map(post => <PostCard key={post._id} post={post} refetch={refetch}></PostCard>)
                        }
                    </div>
                </>
            }
        </>
    );
};

export default AllPost;