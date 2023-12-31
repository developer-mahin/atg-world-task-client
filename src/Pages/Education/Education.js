import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PostCard from '../../Components/PostCard/PostCard';

const Education = () => {

    const { data: allEducation = [], isLoading } = useQuery({
        queryKeyL: ["allEducation"],
        queryFn: async () => {
            const res = await fetch("https://huntyourjob.vercel.app/role-of-post?role=education", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`
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
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </> : <>
                    <div className='mb-3'>
                        {
                            allEducation.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                    </div>
                </>
            }
        </>
    );
};

export default Education;
