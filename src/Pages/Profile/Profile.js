import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { ImPencil } from 'react-icons/im';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ContactInfoModal from '../../Components/ContactInfoModal/ContactInfoModal';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileDataUpdateModal from '../../Components/ProfileDataUpdate/ProfileDataUpdateModal';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import RightSideBarCard from '../../RightSideBar/RightSideBarCard';


const Profile = () => {
    const { user } = useContext(AUTH_CONTEXT)

    const [profileDataUpdateModal, setProfileDataUpdateModal] = useState(false);
    const [contactInfoDataModal, setContactInfoDataModal] = useState(false);

    function openProfileDataModal() {
        setProfileDataUpdateModal(true);
    }

    function closeModal() {
        setProfileDataUpdateModal(false);
    }

    function openContactDataModal() {
        setContactInfoDataModal(true);
    }

    function closeModalForInfo() {
        setContactInfoDataModal(false);
    }

    const customStyles = {
        content: {
            // width: "55%",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#000000",
            borderRadius: "8px",
            padding: "40px"
        },
    };


    const { data: profile = {}, isLoading, refetch } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/profile?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    console.log(profile)


    const rightSideBarInfo = [
        { id: 1, image: "https://i.ibb.co/5FKH0ZF/1624162747433.jpg", name: "Cefalo Bangladesh Ltd", details: "Company | Information, Technology & Service" },
        { id: 2, image: "https://i.ibb.co/nj6V1P8/1557478665329.jpg", name: "Craftsmen", details: "Company | Information, Technology & Service" },
        { id: 3, image: "https://i.ibb.co/5586VtT/1567108127826.jpg", name: "DICE", details: "Company | Information" },
    ]




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

                    <div className=''>
                        <div className='border shadow'>
                            <Navbar></Navbar>
                        </div>
                        <div className='container mx-auto row py-5'>
                            <div className='col-md-9'>

                                <div className='shadow border border-radius'>
                                    <div className='position-relative mb-5'>
                                        <div className='border-radius'>
                                            <PhotoProvider>
                                                <PhotoView src="https://i.pinimg.com/originals/9e/8d/74/9e8d747819250be17bff875604223894.jpg">
                                                    <img src="https://i.pinimg.com/originals/9e/8d/74/9e8d747819250be17bff875604223894.jpg" className='img-fluid border-radius-top h-200 w-100 object-fit-cover cursor-pointer' alt="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>

                                        <div className='position-absolute profile-img border border-5 rounded-pill '>



                                            <PhotoProvider>
                                                <PhotoView src={user?.photoURL ? user?.photoURL :
                                                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}>
                                                    <img src={user?.photoURL ? user?.photoURL :
                                                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} className="img-fluid rounded-pill object-fit-cover w-150 h-150 cursor-pointer" alt="" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>
                                    </div>


                                    <div className='mt-5 px-4 py-4 d-flex justify-content-between'>
                                        <div>
                                            <div>
                                                <h3 className='fw-medium m-0 pb-1'>{profile.name}</h3>

                                                <div className=''>
                                                    <p className='m-0 text-secondary'>Front-end developer || React.js || MERN stack</p>

                                                </div>
                                                <p className='m-0 text-secondary w-75'>Talks about #reactjobs, #javascript, #reactjsdeveloper, #frontenddeveloper, and #mernstackdeveloper</p>
                                            </div>


                                            <div>
                                                <span
                                                    onClick={openContactDataModal}
                                                    className='text-primary cursor-pointer fw-semibold hover-decoration'>Contact info</span>

                                                <ContactInfoModal
                                                    refetch={refetch}
                                                    contactInfoDataModal={contactInfoDataModal}
                                                    customStyles={customStyles}
                                                    closeModalForInfo={closeModalForInfo}
                                                    profile={profile}
                                                >

                                                </ContactInfoModal>
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


                                        </div>

                                        <div>
                                            <div
                                                onClick={openProfileDataModal}
                                                className='d-flex justify-content-end fs-4 pb-2 cursor-pointer'>
                                                <ImPencil />
                                            </div>

                                            <ProfileDataUpdateModal
                                                profileDataUpdateModal={profileDataUpdateModal}
                                                customStyles={customStyles}
                                                closeModal={closeModal}
                                            >
                                            </ProfileDataUpdateModal>

                                            <div className='d-block'>
                                                <p className='fw-semibold hover-decoration cursor-pointer'>Ibrahim Khan govt. college and university</p>
                                            </div>
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
            }
        </>
    );
};

export default Profile;