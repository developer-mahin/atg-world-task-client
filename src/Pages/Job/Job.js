import React from 'react';
import { JobContentWrapper } from '../Jobpage/jobPageStyle';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Components/spinner/Spinner';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Job = () => {
    const {
        data: alljobs = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["totaljob"],
        queryFn: async () => {
            const res = await fetch(
                "https://huntyourjob.vercel.app/getAllJob",
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("access-token")}`,
                        "content-type": "application/json",
                    },
                }
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="">
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
    );
};

export default Job;
