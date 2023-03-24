import React, { useContext, useEffect, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import Navbar from '../../Components/Navbar/Navbar';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import RightSideBarCard from '../../RightSideBar/RightSideBarCard';

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


    const rightSideBarInfo = [
        { id: 1, image: "https://i.ibb.co/5FKH0ZF/1624162747433.jpg", name: "Cefalo Bangladesh Ltd", details: "Company | Information, Technology & Service" },
        { id: 2, image: "https://i.ibb.co/nj6V1P8/1557478665329.jpg", name: "Craftsmen", details: "Company | Information, Technology & Service" },
        { id: 3, image: "https://i.ibb.co/5586VtT/1567108127826.jpg", name: "DICE", details: "Company | Information" },
    ]


    return (
        <>
            <div className=''>
                <div className='border shadow'>
                    <Navbar></Navbar>
                </div>
                <div className='container mx-auto row py-5'>
                    <div className='col-md-9'>

                        <div className='shadow border border-radius'>
                            <div className='position-relative mb-5'>
                                <div className='border-radius'>
                                    <img src="https://i.pinimg.com/originals/9e/8d/74/9e8d747819250be17bff875604223894.jpg" className='img-fluid border-radius-top h-200 w-100 object-fit-cover' alt="" />
                                </div>

                                <div className='position-absolute profile-img border border-5 rounded-pill '>
                                    <img
                                        src={user?.photoURL ? user?.photoURL :
                                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} className="img-fluid rounded-pill object-fit-cover w-150 h-150" alt=""
                                    />
                                </div>
                            </div>
                            <div className='mt-5 px-4 py-4'>
                                <div>
                                    <h3 className='fw-medium m-0'>{profile.name}</h3>
                                    <p className='m-0 text-secondary'>Front-end developer || React.js || MERN stack</p>
                                    <p className='m-0 text-secondary w-75'>Talks about #reactjobs, #javascript, #reactjsdeveloper, #frontenddeveloper, and #mernstackdeveloper</p>
                                </div>
                                <div className='mt-4'>
                                    <button
                                        className='me-2 btn btn-primary rounded-pill px-4 fw-semibold'
                                    >
                                        Open to
                                    </button>
                                    <button
                                        className='mx-2 btn px-4 rounded-pill border text-primary fw-medium border-primary border-2'
                                    >
                                        Add profile section
                                    </button>
                                    <button
                                        className='mx-2 btn bg-secondary bg-opacity-10 rounded-pill px-4 border border-2 border-secondary'
                                    >
                                        More
                                    </button>
                                </div>

                                <div>
                                    <div>

                                    </div>
                                    <div></div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className='col-md-3'>
                        <div>
                            <div className='border border-radius p-3 position-sticky stick-bar-top bg-white'>
                                <p className='fw-semibold'>Add to your feed</p>
                                {
                                    rightSideBarInfo.map(info => <RightSideBarCard key={info.id} info={info}></RightSideBarCard>)
                                }
                                <div className='d-flex align-items-center justify-content-center view-profile rounded'>
                                    <button className='btn d-flex align-items-center gap-1'>
                                        <span className='fw-medium text-secondary text-base'>See All</span>
                                        <BiRightArrowAlt className='fs-4 text-secondary icon' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;