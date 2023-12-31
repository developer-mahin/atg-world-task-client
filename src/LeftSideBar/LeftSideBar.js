import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Spinner from '../Components/spinner/Spinner';
import { AUTH_CONTEXT } from '../Context/AuthProvider';
import RightSideBar from '../RightSideBar/RightSideBar';

const LeftSideBar = () => {

    const { user } = useContext(AUTH_CONTEXT)


    const { data: profile = {}, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const res = await fetch(`https://huntyourjob.vercel.app/profile?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    const { coverPhoto, headLine, name, photo } = profile;

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className=' position-sticky stick-bar-top'>
            <div className='border border-radius'>
                <div className='position-relative'>
                    <div>
                        <img src={coverPhoto ? coverPhoto : "https://i.ibb.co/MkWHC0x/1670523661007.jpg"} className='w-100 image-radius object-fit-cover' height={80} alt="" />
                    </div>
                    <div className="">
                        <div className='profile position-absolute '>
                            <Link to="/profile">
                                <img src={photo} alt="" width={70} height={70} className="rounded-pill object-fit-cover border cursor-pointer " />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-4 px-2 pt-3'>
                    <div className='text-center'>
                        <div>
                            <Link to="/profile" className='link-hover text-black'>{name}</Link>
                        </div>
                        <span className='text-sm fw-regular'>{headLine}</span>
                    </div>
                </div>
                <hr />
                <div className='py-3'>
                    <div className='view-profile px-3' >
                        <div className='d-flex align-items-center justify-content-between '>
                            <p className='text-sm mb-0 text-secondary'>Who's viewed your profile</p>
                            <p className='text-sm mb-0 text-warning'>661</p>
                        </div>
                    </div>
                    <div className='view-profile px-3' >
                        <div className='d-flex align-items-center justify-content-between '>
                            <p className='text-sm mb-0 text-secondary'>Impressions on your post</p>
                            <p className='text-sm mb-0 text-warning'>8597</p>
                        </div>
                    </div>
                </div>
                <hr className='mb-0' />
                <div>
                    <div className='p-3 view-profile'>
                        <p className='text-sm text-secondary mb-0'>Access exclusive tools & insights</p>
                        <p className='d-flex align-items-center gap-1 mb-0'>
                            <AiFillStar className='text-warning fs-5' />
                            <span className='text-sm text-secondary text-decoration-underline fw-semibold cursor-pointer'>Try premium for free</span>
                        </p>
                    </div>
                    <hr className='m-0 ' />
                    <div>
                        <div className='p-3 view-profile border-radius-bottom '>
                            <p className='d-flex align-items-center gap-1 mb-0'>
                                <BsFillBookmarkFill className='text-warning fs-5' />
                                <span className='text-sm text-secondary fw-semibold cursor-pointer'>My Items</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-lg-none d-block mt-3'>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default LeftSideBar;
