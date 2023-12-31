import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../Components/spinner/Spinner';
import ActivityPostCard from '../Activities/ActivityPostCard/ActivityPostCard';

const UserDetailsPost = ({ name, _id }) => {

    console.log(_id)

    const { data: posts = [], isLoading } = useQuery({
        queryKey: ["user-details-post"],
        queryFn: async () => {
            const res = await fetch(`https://huntyourjob.vercel.app/user-details-post?name=${name}`, {
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
        <div>
            <h4>Posts</h4>
            <div>
                {
                    posts.map(post => <ActivityPostCard key={post._id} post={post} />)
                }
            </div>
        </div>
    );
};

export default UserDetailsPost;
