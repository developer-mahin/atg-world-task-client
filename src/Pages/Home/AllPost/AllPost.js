import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import PostCard from '../../../Components/PostCard/PostCard';


const AllPost = () => {

    const { data: allPost = [], isLoading } = useQuery({
        queryKey: ["allPost"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/all-post", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`, 
                    "content-type" : "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    // const [isLoading, setIsLoading] = useState(false)
    // const [allPost, setAllPost] = useState([])
    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch("http://localhost:5000/all-post", {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem("access-token")}`,
    //             "content-type": "application/json"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllPost(data)
    //             setIsLoading(false)
    //         })
    // }, [])


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
                            allPost.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                    </div>
                </>
            }
        </>
    );
};

export default AllPost;