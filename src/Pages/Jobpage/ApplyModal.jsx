import {
    Box
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Spinner from "../../Components/spinner/Spinner";
import { AUTH_CONTEXT } from "../../Context/AuthProvider";
import { BoxWrapper, TextFieldStyle } from "./jobPageStyle";
import "./jobpage.css";

const ApplyModal = ({ customStyles, applyModal, closeModal, data }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AUTH_CONTEXT);

  const {
    data: profile = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(
        `https://banao-project-server.vercel.app/profile?email=${user?.email}`,
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

  const { name, email } = profile;

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const handleApplyJob = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const CTC = form.ctc.value;
    const salary = form.salary.value;
    const experience = form.experience.value;
    const phone = form.phone.value;
    const noticePeriod = form.noticePeriod.value;
    const resume = form.resume.value;

    const applyData = {
      id: data._id,
      name,
      email,
      CTC,
      salary,
      experience,
      phone,
      noticePeriod,
      resume,
    };

    fetch("https://banao-project-server.vercel.app/applyJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(applyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("apply successful");
          setLoading(false);
          closeModal();
          refetch();
        }
      })
      .catch((err) => {
        toast.error(err.message);
        closeModal();
        refetch();
        setLoading(false);
      });
  };

  return (
    <div className="position-relative">
      <Modal
        isOpen={applyModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="position-absolute top-0 end-0 p-2">
          <AiOutlineCloseCircle
            className="fs-2 close_button text-black"
            onClick={closeModal}
          />
        </div>
        <div className="mb-3 post-modal">
          <div className="border-bottom border-secondary">
            <h4 className="fw-normal text-black text-opacity-75">
              APPLICANT FORM
            </h4>
          </div>
          <Box
            sx={{
              mt: "20px",
              width: {
                xs: "100%",
                lg: "600px",
              },
              marginRight: "30px",
            }}
          >
            <form onSubmit={handleApplyJob}>
              <Box>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    label="Applicant Name"
                    variant="outlined"
                    defaultValue={name}
                    disabled
                    fullWidth
                  />
                </BoxWrapper>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    label="Applicant email"
                    variant="outlined"
                    defaultValue={email}
                    disabled
                    fullWidth
                  />
                </BoxWrapper>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    label="CTC"
                    name="ctc"
                    type="number"
                    variant="outlined"
                    fullWidth
                  />
                </BoxWrapper>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    label="Job Experience * years"
                    name="experience"
                    type="number"
                    variant="outlined"
                    fullWidth
                  />
                </BoxWrapper>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    label="Expected Salary "
                    name="salary"
                    type="number"
                    variant="outlined"
                    fullWidth
                  />
                </BoxWrapper>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    label="Phone"
                    name="phone"
                    type="number"
                    variant="outlined"
                    fullWidth
                  />
                </BoxWrapper>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    label="Notice Period"
                    name="noticePeriod"
                    type="number"
                    variant="outlined"
                    fullWidth
                  />
                </BoxWrapper>
                <BoxWrapper>
                  <TextFieldStyle
                    required
                    id="outlined-basic"
                    name="resume"
                    label="Resume Link"
                    type="text"
                    variant="outlined"
                    fullWidth
                  />
                </BoxWrapper>
              </Box>
              <div className="float-end mt-3">
                <button
                  type="submit"
                  className="btn btn-primary px-3 rounded-pill"
                >
                  {loading ? "Loading..." : "Apply"}
                </button>
              </div>
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default ApplyModal;
