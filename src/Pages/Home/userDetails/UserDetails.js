import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RightSideBarCard from '../../../RightSideBar/RightSideBarCard';
import Navbar from '../../../Components/Navbar/Navbar';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const UserDetails = () => {
    const userInfo = useLoaderData()

    const navigate = useNavigation()
    if (navigate === "loading") {
        return "Loading..."
    }


    const { coverPhoto, photo, name, headLine, info, education } = userInfo

    const rightSideBarInfo = [
        { id: 1, image: "https://i.ibb.co/5FKH0ZF/1624162747433.jpg", name: "Cefalo Bangladesh Ltd", details: "Company | Information, Technology & Service" },
        { id: 2, image: "https://i.ibb.co/nj6V1P8/1557478665329.jpg", name: "Craftsmen", details: "Company | Information, Technology & Service" },
        { id: 3, image: "https://i.ibb.co/5586VtT/1567108127826.jpg", name: "DICE", details: "Company | Information" },
    ]


    return (
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
                                    <PhotoView src={coverPhoto}>
                                        <img
                                            className='img-fluid border-radius-top h-200 w-100 object-fit-cover cursor-pointer'
                                            src={coverPhoto ? coverPhoto : "https://marketplace.canva.com/EAFIddqdjTk/2/0/1600w/canva-black-minimalist-motivation-quote-linkedin-banner-1PLNOKlL1HU.jpg"}
                                            alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>


                            <div>
                                <div
                                    className='position-absolute profile-img border border-5 rounded-pill '>

                                    <PhotoProvider>
                                        <PhotoView src={photo}>
                                            <img className="img-fluid rounded-pill object-fit-cover w-150 h-150 cursor-pointer" src={photo} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </div>
                            </div>

                        </div>


                        <div className='mt-5 px-4 py-4 d-flex justify-content-between'>
                            <div>
                                <div>
                                    <h3 className='fw-medium m-0 pb-1'>
                                        {name}
                                    </h3>

                                    <div className=''>
                                        <p className='m-0 text-secondary'>
                                            {headLine ? headLine : "Profile is not updated"}
                                        </p>

                                    </div>
                                    <p className='m-0 text-secondary'>Talks about {info?.tag ? info?.tag : "Profile is not updated"}</p>

                                    <div className='d-flex gap-1'>
                                        <p className='m-0 text-secondary'>
                                            {info?.country ? info?.country + " " + "||" : "Profile is not updated"}
                                        </p>
                                        <p className='m-0 text-secondary'>
                                            {info?.city ? info?.city : "Profile is not updated"}
                                        </p>
                                    </div>
                                    <div>
                                        <a href={info?.website} target="blank" className='m-0 text-primary fw-medium'>
                                            {info?.website ? info?.website : "Profile is not updated"}
                                        </a>
                                    </div>
                                </div>


                                <div>
                                    <span
                                        className='text-primary cursor-pointer fw-semibold hover-decoration'>Contact info</span>
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
                                <div className='d-block'>
                                    <p className='fw-semibold hover-decoration cursor-pointer'>
                                        {education ? education : "Profile is not updated"}
                                    </p>
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
    );
};

export default UserDetails;