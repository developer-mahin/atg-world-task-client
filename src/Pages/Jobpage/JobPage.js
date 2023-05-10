import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import ArticleIcon from '@mui/icons-material/Article';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, IconButton, Typography } from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { JobContentWrapper, SafetyBoxWrapper } from './jobPageStyle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';


const JobPage = () => {



    const fakeData = [
        { img: "https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI", title: "React Developer", company: "American Technology Consulting - ATC", location: "Chicago, IL", job_type: "Hybrid", time: "12 Hour's ago" },
        { img: "https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI", title: "React Developer", company: "American Technology Consulting - ATC", location: "Chicago, IL", job_type: "Hybrid", time: "12 Hour's ago" },
        { img: "https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI", title: "React Developer", company: "American Technology Consulting - ATC", location: "Chicago, IL", job_type: "Hybrid", time: "12 Hour's ago" },
        { img: "https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI", title: "React Developer", company: "American Technology Consulting - ATC", location: "Chicago, IL", job_type: "Hybrid", time: "12 Hour's ago" },
    ]





    return (
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
                            <Button sx={{ borderRadius: "50px", padding: "8px 30px", width: "100%" }} variant='outlined'> <SaveAsIcon /> Post a free Job</Button>
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
                                    fakeData.map((data, i) => <Box key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: "20px", my: "20px" }}>
                                            <img src={data?.img} className='img-fluid' alt="" />
                                            <Box>
                                                <Typography sx={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>{data.title}</Typography>
                                                <Typography>
                                                    {data.company}
                                                </Typography>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                                                    <Typography>{data.location}</Typography>
                                                    <Typography sx={{ fontWeight: "500" }}>({data.job_type})</Typography>
                                                </Box>
                                                <Typography sx={{ color: "#008000" }}>{data.time}</Typography>

                                            </Box>
                                        </Box>
                                        <Box>
                                            <IconButton>
                                                <BookmarkBorderOutlinedIcon/>
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
    );
};

export default JobPage;