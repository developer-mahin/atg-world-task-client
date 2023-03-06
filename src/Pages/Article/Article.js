import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PostCard from '../../Components/PostCard/PostCard';

const Article = () => {

    const { data: allArticle = [], isLoading, refetch } = useQuery({
        queryKey: ["allArticle"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/role-of-post?role=article")
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
                            allArticle.map(post => <PostCard key={post._id} post={post}></PostCard>)
                        }
                    </div>
                </>
            }
        </>
    );
};

export default Article;