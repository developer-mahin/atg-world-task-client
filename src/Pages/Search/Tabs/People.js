import { useQuery } from '@tanstack/react-query';
import React from 'react';

const People = () => {

    const { data: users = [] } = useQuery({
        queryKey: ["userName"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/all-users", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    console.log(users)


    return (
        <div className='container mx-auto px-3 row border'>
            <div className='col-md-4 overflow-scroll h-75'>
                {
                    users.map(user => <div key={user._id}>
                        <h3>{user.name}</h3>
                    </div>)
                }
            </div>
            <div className='col-md-8'>

            </div>
        </div>
    );
};

export default People;