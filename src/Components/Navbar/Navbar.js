import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaEnvelope, FaUserFriends } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import { AUTH_CONTEXT } from '../../Context/AuthProvider';

const Navbar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    const { user, logOut } = useContext(AUTH_CONTEXT)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User successfully loged out")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const navigate = useNavigate()
    const handleSearchBar = (e) => {
        e.preventDefault()
        navigate("/search")
    }

    const { data: profile = {} } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const res = await fetch(`https://banao-project-server.vercel.app/profile?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`,
                    "content-type": "application/json"
                }
            })
            const data = await res.json()
            return data
        }
    })

    const { photo } = profile;


    return (

        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container mx-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">
                        <img className='pt-2' src={logo} alt="" />
                    </Link>

                    <div className="collapse navbar-collapse bg-white" id="navbarTogglerDemo01">
                        <form className="me-auto" onSubmit={handleSearchBar}>
                            <input
                            onClick={()=>navigate("/search")}
                            className="form-control w-100 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <div className='text-center'>
                                    <Link className="nav-link active" aria-current="page" to="/message">
                                        <FaEnvelope className='icon-size' />
                                        <span className='d-block text-sm mx-2'>Message</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='text-center'>
                                    <Link className="nav-link active" aria-current="page" to="/my-network">
                                        <FaUserFriends className='icon-size' />
                                        <span className='d-block text-sm mx-2'>My Network</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='text-center'>
                                    <Link className="nav-link active" aria-current="page" to="/job-page">
                                        <MdWork className='icon-size' />
                                        <span className='d-block text-sm mx-2'>Job</span>
                                    </Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className='text-center'>
                                    <Link className="nav-link active" aria-current="page" to="/notification">
                                        <IoMdNotifications className='icon-size' />
                                        <span className='d-block text-sm mx-2'>Notification</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='mt-2'>
                                    <div className="dropdown">
                                        <button className="border-0 bg-white d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div>
                                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                                    <div>
                                                        <img
                                                            width={"40px"}
                                                            height={"40px"}
                                                            src={
                                                                photo ? photo
                                                                    :
                                                                    "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                                                            }
                                                            className="rounded-pill object-fit-cover"
                                                            alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <RiArrowDownSFill />
                                        </button>
                                        <ul className="dropdown-menu py-2">
                                            <li className='ps-3 my-2'>
                                                <Link to="/profile" className='text-decoration-none text-black d-flex gap-1 align-items-center'>
                                                    <CgProfile />
                                                    <span>Profile</span>
                                                </Link>
                                            </li>
                                            <li className='ps-3 my-2'>
                                                <Link to="/setting" className='text-decoration-none text-black d-flex gap-1 align-items-center'>
                                                    <AiOutlineSetting />
                                                    <span>Setting</span>
                                                </Link>
                                            </li>
                                            <li className='my-1'>
                                                <div className=''>
                                                    <button onClick={handleLogOut} className="dropdown-item rounded d-flex gap-1 align-items-center">
                                                        <BiLogOut />
                                                        <span>Logout</span>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;