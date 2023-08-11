import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import { Box, Button, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Spinner from "../../Components/spinner/Spinner";
import {
  ButtonStyle,
  JobContentWrapper,
  NormalFlex,
  NormalText,
  Title,
  ViewDetailsWrapper,
} from "./jobPageStyle";
import ApplyModal from "./ApplyModal";

const customStyles = {
  content: {
    // width: "55%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#ddd",
    borderRadius: "8px",
    padding: "40px",
  },
};

const ViewDetails = () => {
  const data = useLoaderData();

  const [applyModal, setApplyModal] = useState(false);

  function openPostModal() {
    setApplyModal(true);
  }

  function closeModal() {
    setApplyModal(false);
  }

  const {
    data: alljobs = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["totaljob"],
    queryFn: async () => {
      const res = await fetch(
        "https://banao-project-server.vercel.app/getAllJob",
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

  const {
    date,
    description,
    image,
    location,
    name,
    requirements,
    responsibilities,
    skills,
    title,
    type,
    workplace,
  } = data;

  return (
    <>
      <div className="border shadow position-sticky top-0 bg-white z-index">
        <Navbar></Navbar>
      </div>
      <Container>
        <ViewDetailsWrapper>
          <Box
            sx={{
              height: "100%",
              overflow: "scroll",
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <JobContentWrapper>
              <Box sx={{ mb: "20px" }}>
                <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                  All opportunities
                </Typography>
                <Typography>
                  Because you expressed interest in remote work
                </Typography>
              </Box>
              <Box>
                {alljobs.map((data, i) => (
                  <Box
                    component={Link}
                    to={`/view-details/${data._id}`}
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        my: "20px",
                      }}
                    >
                      <img
                        src={data.image}
                        className="img-fluid"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "24px",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >
                          {data.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#333",
                          }}
                        >
                          {data.name}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                            color: "#333",
                          }}
                        >
                          <Typography>{data.location}</Typography>
                          <Typography sx={{ fontWeight: "500" }}>
                            ({data.workplace})
                          </Typography>
                        </Box>
                        <Typography sx={{ color: "#008000" }}>
                          {data.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </JobContentWrapper>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: {
                  xs: "100%",
                  lg: "600px",
                },
                height: {
                  xs: "auto",
                  lg: "300px",
                },
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                className="img-fluid rounded shadow-lg"
                src={image}
                alt=""
              />
            </Box>
            <Box sx={{ mt: "30px" }}>
              <Title>{title}</Title>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  flexWrap: "wrap",
                }}
              >
                <NormalText
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {name} -{" "}
                </NormalText>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      lg: "18px",
                    },
                  }}
                >
                  {location}{" "}
                </Typography>
                <NormalText>({type}) </NormalText>
                <Typography
                  sx={{
                    color: "green",
                    fontWeight: "600",
                    fontSize: {
                      xs: "14px",
                      lg: "18px",
                    },
                  }}
                >
                  {date}{" "}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                mt: "20px",
              }}
            >
              <NormalFlex>
                <WorkOffIcon />
                <NormalText>{type}</NormalText>
                <NormalText>Entry level</NormalText>
              </NormalFlex>

              <NormalFlex>
                <ListAltOutlinedIcon />
                <NormalText>
                  1,001-5,000 employees · IT Services and IT Consulting
                </NormalText>
              </NormalFlex>

              <NormalFlex>
                <WbIncandescentOutlinedIcon />
                <NormalText>See how you compare to 28 applicants.</NormalText>
                <NormalText
                  sx={{
                    textDecoration: "underline",
                    color: "#333",
                    cursor: "pointer",
                  }}
                >
                  Tyr To Premium
                </NormalText>
              </NormalFlex>

              <NormalFlex>
                <GradingOutlinedIcon />
                <NormalText>{skills}</NormalText>
              </NormalFlex>

              <NormalFlex>
                <TaskAltRoundedIcon />
                <NormalText>
                  View verifications related to this job post.
                </NormalText>
                <Typography
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    fontWeight: "500",
                    color: "#000",
                    fontSize: {
                      xs: "14px",
                      lg: "18px",
                    },
                  }}
                >
                  Show all
                </Typography>
              </NormalFlex>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                mt: "20px",
              }}
            >
              <ButtonStyle onClick={openPostModal} variant="contained">
                Apply
              </ButtonStyle>
              <ButtonStyle variant="outlined">Save</ButtonStyle>
            </Box>

            <Box sx={{ mt: "30px" }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "500",
                }}
              >
                About the job
              </Typography>
              <NormalText
                sx={{
                  fontWeight: "400",
                  mt: "20px",
                }}
              >
                {description}
              </NormalText>
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              <NormalText>Job Responsibilities:</NormalText>
              <Typography>{responsibilities}</Typography>
            </Box>
            <Box sx={{ margin: "20px 0px" }}>
              <NormalText>Job Requirements:</NormalText>
              <Typography>{requirements}</Typography>
            </Box>
          </Box>
        </ViewDetailsWrapper>
      </Container>

      <ApplyModal
        customStyles={customStyles}
        applyModal={applyModal}
        closeModal={closeModal}
        data={data}
        refetch={refetch}
      />
    </>
  );
};

export default ViewDetails;
