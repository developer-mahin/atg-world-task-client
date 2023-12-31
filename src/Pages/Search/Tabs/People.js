import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/spinner/Spinner';
import { toast } from 'react-hot-toast';

const People = () => {
    const [peopleTabUser, setPeopleTabUser] = useState("")

    const { data: users = [], isLoading } = useQuery({
        queryKey: ["userName"],
        queryFn: async () => {
            const res = await fetch("https://huntyourjob.vercel.app/all-users", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    const handleFollow = () => {
        toast.success("Followed!")
    }

    const handleConnect = () => {
        toast.success("Connected!")
    }

    return (
        <div className='container mx-auto row border py-4 rounded'>

            <div className='col-md-8 p-0 d-md-none d-block position-sticky top-76 bg-white'>
                <>
                    {
                        peopleTabUser ? <div className='border rounded p-lg-5 p-3'>

                            <div className='d-flex align-items-center gap-4'>
                                <div>
                                    <Link to={`/user-details/${peopleTabUser._id}`} >
                                        <img src={peopleTabUser.photo} className='rounded-pill object-fit-cover border-and-shadow' width={"80px"} height={"80px"} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={`/user-details/${peopleTabUser._id}`} className='text-black text-decoration-none text-hover-underline'>
                                        <h5 className='m-0 py-1'>{peopleTabUser?.name}</h5>
                                    </Link>
                                    <p className='m-0 fw-medium'>{peopleTabUser?.headLine}</p>
                                    {
                                        peopleTabUser.info ? <>
                                            <span className='fw-medium text-secondary'>{peopleTabUser?.info?.city}, </span>
                                            <span className='fw-medium text-secondary'>{peopleTabUser?.info?.country}</span>
                                        </> : "Profile not updated"
                                    }
                                </div>
                            </div>


                            <div className='pt-4'>
                                <button className='btn btn-primary rounded-pill px-4 fw-medium me-2'>Follow</button>
                                <button className='btn btn-secondary rounded-pill px-4 fw-medium'>Connect</button>
                            </div>

                        </div> : <>

                            <p className='text-center'>select a user to view details</p>
                        </>
                    }
                </>
            </div>

            <div className='col-md-4 overflow-scroll h-500'>
                <>
                    {
                        isLoading ? <Spinner></Spinner> : <>
                            <div>
                                <p className='fw-medium'>{`About ${users.length} results`}</p>
                            </div>

                            {
                                users.map(user => <div
                                    onClick={() => setPeopleTabUser(user)}
                                    className='my-2 border rounded'
                                    key={user._id}>
                                    <p className='m-0 d-block text-decoration-none text-black py-2 px-3 text-hover-blue cursor-pointer'>{user.name}</p>
                                </div>)
                            }

                        </>
                    }
                </>
            </div>
            <div className='col-md-8 d-md-block d-none'>
                <>
                    {
                        peopleTabUser ? <div className='border rounded p-lg-5 p-3'>

                            <div className='d-flex align-items-center gap-4'>
                                <div>
                                    <Link to={`/user-details/${peopleTabUser._id}`} >
                                        <img src={peopleTabUser.photo} className='rounded-pill object-fit-cover border-2' width={"80px"} height={"80px"} alt="" />
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={`/user-details/${peopleTabUser._id}`} className='text-black text-decoration-none text-hover-underline'>
                                        <h5 className='m-0 py-1'>{peopleTabUser?.name}</h5>
                                    </Link>
                                    <p className='m-0 fw-medium'>{peopleTabUser?.headLine}</p>
                                    {
                                        peopleTabUser.info ? <>
                                            <span className='fw-medium text-secondary'>{peopleTabUser?.info?.city}, </span>
                                            <span className='fw-medium text-secondary'>{peopleTabUser?.info?.country}</span>
                                        </> : "Profile not updated"
                                    }
                                </div>
                            </div>


                            <div className='pt-4'>
                                <button
                                    onClick={handleFollow}
                                    className='btn btn-primary rounded-pill px-4 fw-medium me-2'>Follow</button>
                                <button
                                    onClick={handleConnect}
                                    className='btn btn-secondary rounded-pill px-4 fw-medium'>Connect</button>
                            </div>

                        </div> : <>

                            <p className='text-center'>select a user to view details</p>
                        </>
                    }
                </>
            </div>
        </div >
    );
};

export default People;
