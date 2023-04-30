import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { MdGroupAdd, MdPersonAdd } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Components/spinner/Spinner';

const Message = () => {

    const { data: users = [], isLoading } = useQuery({
        queryKey: ["userName"],
        queryFn: async () => {
            const res = await fetch("https://banao-project-server.vercel.app/all-users", {
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
        return <Spinner />
    }




    return (
        <div className=''>
            <div className='border shadow position-sticky top-0 bg-white z-index'>
                <Navbar></Navbar>
            </div>
            <div className='mt-3'>
                <div className='container mx-auto row '>
                    <div className='col-md-5'>
                        <div className='bg-secondary bg-opacity-10 p-4 rounded h-75 overflow-scroll'>
                            <div className=' d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className=''>Message</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <MdPersonAdd className='fs-4 text-secondary' />
                                    <MdGroupAdd className='fs-3 text-secondary' />
                                </div>
                            </div>
                            <div className='position-relative'>
                                <div className='position-absolute  bottom-8px left-12px'>
                                    <BiSearchAlt2 className='fs-4 text-secondary' />
                                </div>
                                <input type="text" name='search' className='w-100 border bg-secondary bg-opacity-25 px-5 py-2 rounded'
                                    placeholder='Search Message'
                                />
                            </div>

                            <div className='mt-4'>
                                {
                                    users.map(user => <div
                                        className='my-2 border rounded'
                                        key={user._id}>
                                        <p className='m-0 d-block text-decoration-none text-black py-2 px-3 text-hover-blue cursor-pointer'>{user.name}</p>
                                    </div>)
                                }
                            </div>
                        </div>



                    </div>
                    <div className='col-md-7'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;