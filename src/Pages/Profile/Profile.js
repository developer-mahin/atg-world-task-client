import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';

const Profile = () => {
    const [profile, setProfile] = useState({})
    const { user } = useContext(AUTH_CONTEXT)

    useEffect(() => {
        fetch(`http://localhost:5000/profile?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data)
            })
    }, [user])


    return (
        <>
            <div className='sticky-position shadow-sm'>
                <Navbar></Navbar>
            </div>
        </>
    );
};

export default Profile;