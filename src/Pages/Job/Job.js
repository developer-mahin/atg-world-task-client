import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PostCard from '../../Components/PostCard/PostCard';

const Job = () => {

    const { data: allJob = [], isLoading } = useQuery({
        queryKey: ["allJobs"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/role-of-post?role=job")
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
                            allJob.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                    </div>
                </>
            }
        </>
    );
};

export default Job;