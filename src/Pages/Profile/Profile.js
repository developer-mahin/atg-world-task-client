import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { ImPencil } from 'react-icons/im';
import ContactInfoModal from '../../Components/ContactInfoModal/ContactInfoModal';
import CoverPhotoChangeModal from '../../Components/coverPhotoChangeModal/CoverPhotoChangeModal';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileDataUpdateModal from '../../Components/ProfileDataUpdate/ProfileDataUpdateModal';
import ProfilePicModal from '../../Components/ProfilePicModal/ProfilePicModal';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import RightSideBarCard from '../../RightSideBar/RightSideBarCard';
import Spinner from '../../Components/spinner/Spinner';
import Activities from './Activities/Activities';


const Profile = () => {
    const { user } = useContext(AUTH_CONTEXT)

    const [profileDataUpdateModal, setProfileDataUpdateModal] = useState(false);
    const [contactInfoDataModal, setContactInfoDataModal] = useState(false);
    const [changeProfilePicModal, setChangeProfilePicModal] = useState(false);
    const [changeCoverPicModal, setChangeCoverPicModal] = useState(false);

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

    // profile pic change
    function openProfilePicModal() {
        setChangeProfilePicModal(true);
    }

    function closeProfilePicModal() {
        setChangeProfilePicModal(false);
    }

    // cover pic change
    function openCoverPicModal() {
        setChangeCoverPicModal(true);
    }

    function closeCoverPicModal() {
        setChangeCoverPicModal(false);
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

    const { coverPhoto, education, headLine, info, name, photo } = profile;

    if (isLoading) {
        return <Spinner></Spinner>
    }


    const rightSideBarInfo = [
        { id: 1, image: "https://i.ibb.co/5FKH0ZF/1624162747433.jpg", name: "Cefalo Bangladesh Ltd", details: "Company | Information, Technology & Service" },
        { id: 2, image: "https://i.ibb.co/nj6V1P8/1557478665329.jpg", name: "Craftsmen", details: "Company | Information, Technology & Service" },
        { id: 3, image: "https://i.ibb.co/5586VtT/1567108127826.jpg", name: "DICE", details: "Company | Information" },
    ]




    return (
        <>
            <div className=''>
                <div className='border shadow position-sticky top-0 bg-white z-index'>
                    <Navbar></Navbar>
                </div>
                <div className='container mx-auto row py-lg-5 py-3'>
                    <div className='col-md-9 p-0 p-lg-2'>

                        <div className='shadow border border-radius'>
                            <div className='position-relative mb-5'>
                                <div className='border-radius' onClick={openCoverPicModal}>

                                    <img src={coverPhoto ? coverPhoto : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"} className='img-fluid border-radius-top h-200 w-100 object-fit-cover cursor-pointer' alt="" />

                                    <CoverPhotoChangeModal
                                        setChangeCoverPicModal={setChangeCoverPicModal}
                                        refetch={refetch}
                                        changeCoverPicModal={changeCoverPicModal}
                                        customStyles={customStyles}
                                        closeCoverPicModal={closeCoverPicModal}
                                        profile={profile}

                                    ></CoverPhotoChangeModal>
                                </div>


                                <div>
                                    <div
                                        onClick={openProfilePicModal}
                                        className='position-absolute profile-img border border-5 rounded-pill '>

                                        <img src={photo} className="img-fluid rounded-pill object-fit-cover w-150 h-150 cursor-pointer" alt="" />

                                    </div>
                                    <ProfilePicModal
                                        refetch={refetch}
                                        changeProfilePicModal={changeProfilePicModal}
                                        customStyles={customStyles}
                                        closeProfilePicModal={closeProfilePicModal}
                                        profile={profile}

                                    >

                                    </ProfilePicModal>
                                </div>

                            </div>


                            <div className='mt-5 p-lg-4 p-3 d-lg-flex d-block justify-content-between'>
                                <div>
                                    <div>
                                        <h3 className='fw-medium m-0 pb-1'>
                                            {name}
                                        </h3>

                                        <div className=''>
                                            <p className='m-0 text-secondary'>
                                                {headLine ? headLine : "Please update your profile"}
                                            </p>

                                        </div>
                                        <p className='m-0 text-secondary'>Talks about {info?.tag ? info?.tag : "Please update your profile"}</p>

                                        <div className='d-flex gap-1'>
                                            <p className='m-0 text-secondary'>
                                                {info?.country ? info?.country + " " + "||" : "Please update your profile"}
                                            </p>
                                            <p className='m-0 text-secondary'>
                                                {info?.city ? info?.city : "Please update your profile"}
                                            </p>
                                        </div>
                                        <div>
                                            <a href={info?.website} target="blank" className='m-0 text-primary fw-medium'>
                                                {info?.website ? info?.website : "Please update your profile"}
                                            </a>
                                        </div>
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


                                    <div className='d-lg-none d-block'>
                                        <div
                                            onClick={openProfileDataModal}
                                            className='d-flex justify-content-end fs-4 pb-2 cursor-pointer'>
                                            <ImPencil />
                                        </div>

                                        <ProfileDataUpdateModal
                                            profileDataUpdateModal={profileDataUpdateModal}
                                            customStyles={customStyles}
                                            closeModal={closeModal}
                                            profile={profile}
                                            refetch={refetch}
                                        >
                                        </ProfileDataUpdateModal>

                                        <div className='d-block'>
                                            <p className='fw-semibold hover-decoration cursor-pointer'>
                                                {education ? education : "Please update your profile"}
                                            </p>
                                        </div>
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
                                            className='md-mx-2 mx-0 mt-md-0 mt-3 btn bg-secondary bg-opacity-10 rounded-pill px-4 border border-2 border-secondary'
                                        >
                                            More
                                        </button>
                                    </div>


                                </div>

                                <div className='d-lg-block d-none'>
                                    <div
                                        onClick={openProfileDataModal}
                                        className='d-flex justify-content-end fs-4 pb-2 cursor-pointer'>
                                        <ImPencil />
                                    </div>

                                    <ProfileDataUpdateModal
                                        profileDataUpdateModal={profileDataUpdateModal}
                                        customStyles={customStyles}
                                        closeModal={closeModal}
                                        profile={profile}
                                        refetch={refetch}
                                    >
                                    </ProfileDataUpdateModal>

                                    <div className='d-block'>
                                        <p className='fw-semibold hover-decoration cursor-pointer'>
                                            {education ? education : "Please update your profile"}
                                        </p>
                                    </div>
                                </div>

                            </div>



                        </div>


                        <div className='shadow border border-radius mt-3 p-lg-4 p-3'>
                            <Activities></Activities>
                        </div>
                    </div>


                    <div className='col-md-3 p-0 p-lg-2 mt-md-0 mt-3'>
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