import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AUTH_CONTEXT } from '../Context/AuthProvider';
import RightSideBar from '../RightSideBar/RightSideBar';

const LeftSideBar = () => {

    const { user } = useContext(AUTH_CONTEXT)

    return (
        <div className=' position-sticky stick-bar-top'>
            <div className='border border-radius'>
                <div className='position-relative'>
                    <div>
                        <img src="https://i.ibb.co/MkWHC0x/1670523661007.jpg" className='w-100 image-radius' height={80} alt="" />
                    </div>
                    <div className="">
                        <div className='profile position-absolute '>
                            <Link to="/profile">
                                <img src={user?.photoURL} alt="" width={70} height={70} className="rounded-pill object-fit-cover border cursor-pointer " />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-4 px-3 pt-3'>
                    <div className='text-center'>
                        <div>
                            <Link to="/profile" className='link-hover text-black'>{user?.displayName}</Link>
                        </div>
                        <span className='text-sm fw-regular'>Web Developer || MERN Stack Developer</span>
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