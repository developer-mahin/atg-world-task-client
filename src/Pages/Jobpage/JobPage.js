import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArticleIcon from '@mui/icons-material/Article';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Spinner from '../../Components/spinner/Spinner';
import JobPostModal from './JobPostModal';
import { JobContentWrapper, SafetyBoxWrapper } from './jobPageStyle';

const customStyles = {
    content: {
        // width: "55%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "#ddd",
        borderRadius: "8px",
        padding: "40px"
    },
};

const JobPage = () => {

    const [postModal, setPostModal] = useState(false);


    function openPostModal() {
        setPostModal(true);
    }

    function closeModal() {
        setPostModal(false);
    }


    const { data: alljobs = [], refetch, isLoading } = useQuery({
        queryKey: ["totaljob"],
        queryFn: async () => {
            const res = await fetch("https://banao-project-server.vercel.app/getAllJob", {
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
        <>
            <div className="">
                <div className='border shadow position-sticky top-0 bg-white z-index'>
                    <Navbar></Navbar>
                </div>
                <div className='container mx-auto px-3 mt-4'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='rounded border shadow p-md-4'>
                                <div className='d-flex align-items-center gap-1 my-3
                        '>
                                    <BookmarkIcon className='text-secondary' />
                                    <p className='m-0 fw-medium text-secondary'>My Jobs</p>
                                </div>

                                <div className='d-flex align-items-center gap-1 my-3
                        '>
                                    <NotificationsActiveIcon className='text-secondary' />
                                    <p className='m-0 fw-medium text-secondary'>Job Alerts</p>
                                </div>

                                <div className='d-flex align-items-center gap-1 my-3
                        '>
                                    <DownloadDoneIcon className='text-secondary' />
                                    <p className='m-0 fw-medium text-secondary'>Demonstrate Skill</p>
                                </div>

                                <div className='d-flex align-items-center gap-1 my-3
                        '>
                                    <ArticleIcon className='text-secondary' />
                                    <p className='m-0 fw-medium text-secondary'>Interview Prep</p>
                                </div>

                                <div className='d-flex align-items-center gap-1 my-3
                        '>
                                    <DocumentScannerIcon className='text-secondary' />
                                    <p className='m-0 fw-medium text-secondary'>Resume Builder</p>
                                </div>

                                <div className='d-flex align-items-center gap-1 my-3
                        '>
                                    <YouTubeIcon className='text-secondary' />
                                    <p className='m-0 fw-medium text-secondary'>Job Seeker Guidance</p>
                                </div>
                            </div>
                            <Box sx={{ mt: "20px" }}>
                                <Button
                                    onClick={openPostModal}
                                    sx={{ borderRadius: "50px", padding: "8px 30px", width: "100%" }} variant='outlined'> <SaveAsIcon /> Post a free Job</Button>
                            </Box>
                        </div>

                        <div className='col-md-6'>
                            <JobContentWrapper>

                                <Box sx={{ mb: "20px" }}>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>All opportunities</Typography>
                                    <Typography>Because you expressed interest in remote work</Typography>
                                </Box>
                                <Box>
                                    {
                                        alljobs.map((data, i) =>
                                            <Box component={Link} to={`/view-details/${data._id}`} key={i}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    textDecoration: "none"
                                                }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "20px",
                                                        my: "20px"
                                                    }}>
                                                    <img src={data.image} className='img-fluid' style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                                    <Box>
                                                        <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>{data.title}</Typography>
                                                        <Typography sx={{
                                                            color: "#333"
                                                        }}>
                                                            {data.name}
                                                        </Typography>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: "2px", color: "#333" }}>
                                                            <Typography>{data.location}</Typography>
                                                            <Typography sx={{ fontWeight: "500" }}>({data.workplace})</Typography>
                                                        </Box>
                                                        <Typography sx={{ color: "#008000" }}>{data.date}</Typography>

                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <IconButton>
                                                        <BookmarkBorderOutlinedIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>)
                                    }
                                    <Box>
                                        <Button variant='outlined' fullWidth sx={{ padding: "8px 20px", fontWeight: "500", fontSize: "18px" }}>See All <ArrowRightAltIcon /> </Button>
                                    </Box>
                                </Box>
                            </JobContentWrapper>

                            {/**
                             * 
                             * 
                            */}

                            <JobContentWrapper sx={{
                                marginTop: "30px"
                            }}>

                                <Box sx={{ mb: "20px" }}>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>Recommended for you</Typography>
                                    <Typography>Based on your profile and search history</Typography>
                                </Box>
                                <Box>
                                    {
                                        alljobs.slice(0, 5).map((data, i) =>
                                            <Box key={i}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    textDecoration: "none"
                                                }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "20px",
                                                        my: "20px"
                                                    }}>
                                                    <img src={data.image} className='img-fluid' style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                                    <Box>
                                                        <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>{data.title}</Typography>
                                                        <Typography sx={{
                                                            color: "#333"
                                                        }}>
                                                            {data.name}
                                                        </Typography>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: "2px", color: "#333" }}>
                                                            <Typography>{data.location}</Typography>
                                                            <Typography sx={{ fontWeight: "500" }}>({data.workplace})</Typography>
                                                        </Box>
                                                        <Typography sx={{ color: "#008000" }}>{data.date}</Typography>

                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <IconButton>
                                                        <BookmarkBorderOutlinedIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>)
                                    }
                                    <Box>
                                        <Button variant='outlined' fullWidth sx={{ padding: "8px 20px", fontWeight: "500", fontSize: "18px" }}>See All <ArrowRightAltIcon /> </Button>
                                    </Box>
                                </Box>
                            </JobContentWrapper>

                            {/**
                             * 
                             * 
                            */}
                            <JobContentWrapper sx={{
                                marginTop: "30px"
                            }}>

                                <Box sx={{ mb: "20px" }}>
                                    <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>Remote opportunities</Typography>
                                    <Typography>Because you expressed interest in remote work</Typography>
                                </Box>
                                <Box>
                                    {
                                        alljobs.slice(0, 3).map((data, i) =>
                                            <Box key={i}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    textDecoration: "none"
                                                }}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "20px",
                                                        my: "20px"
                                                    }}>
                                                    <img src={data.image} className='img-fluid' style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                                    <Box>
                                                        <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>{data.title}</Typography>
                                                        <Typography sx={{
                                                            color: "#333"
                                                        }}>
                                                            {data.name}
                                                        </Typography>
                                                        <Box sx={{ display: "flex", alignItems: "center", gap: "2px", color: "#333" }}>
                                                            <Typography>{data.location}</Typography>
                                                            <Typography sx={{ fontWeight: "500" }}>({data.workplace})</Typography>
                                                        </Box>
                                                        <Typography sx={{ color: "#008000" }}>{data.date}</Typography>

                                                    </Box>
                                                </Box>
                                                <Box>
                                                    <IconButton>
                                                        <BookmarkBorderOutlinedIcon />
                                                    </IconButton>
                                                </Box>
                                            </Box>)
                                    }
                                    <Box>
                                        <Button variant='outlined' fullWidth sx={{ padding: "8px 20px", fontWeight: "500", fontSize: "18px" }}>See All <ArrowRightAltIcon /> </Button>
                                    </Box>
                                </Box>
                            </JobContentWrapper>
                        </div>


                        <div className='col-md-3'>
                            <SafetyBoxWrapper>
                                <Typography sx={{ fontSize: "20px", fontWeight: "600", mb: "10px" }}>Safety tips for your job search</Typography>
                                <img className='img-fluid' src="https://media.tenor.com/xnDaTMFs4f0AAAAC/security-shield.gif" alt="" />
                                <Typography sx={{ mt: "10px" }}>Job-Junction is committed to your safety as you find your next big opportunity.</Typography>
                            </SafetyBoxWrapper>
                        </div>
                    </div>
                </div>
            </div>

            <JobPostModal refetch={refetch} customStyles={customStyles} closeModal={closeModal} postModal={postModal} />
        </>
    );
};

export default JobPage;