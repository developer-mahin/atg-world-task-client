import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Inputs from "./Inputs";
import "./jobpage.css";

const JobPostModal = ({ closeModal, customStyles, postModal, refetch }) => {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const name = form.name.value;
    const requirements = form.requirements.value;
    const skills = form.skills.value;
    const responsibilities = form.responsibilities.value;
    const workplace = form.workplace.value;
    const location = form.location.value;
    const type = form.type.value;
    const date = new Date();
    const image = form.file.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=b486f58b0681b7c344264f43dd69a0d8`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const image = data.data.display_url;
        const formData = {
          title,
          description,
          name,
          requirements,
          skills,
          responsibilities,
          workplace,
          location,
          type,
          image,
          date,
        };
        fetch("https://huntyourjob.vercel.app/add-job", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            toast.success("successfully posted your job");
            setLoading(false);
            closeModal();
          })
          .catch((err) => {
            toast.error(err.message);
            setLoading(false);
            closeModal();
          });
      })
      .catch((err) => {
        toast.error(err.message);
        closeModal();
        setLoading(false);
      });
  };

  return (
    <div className="position-relative">
      <Modal
        isOpen={postModal}
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
              Find a great hire, fast
            </h4>
            <p>Rated #1 in increasing quality of hire.1</p>
          </div>
          <div className="mt-4">
            <form onSubmit={handleFormSubmit}>
              <div className="">
                <Inputs
                  label="Job Title"
                  name="title"
                  placeholder="Job Title"
                />
                <div className="mb-lg-2 w-100">
                  <label className="label">Job Description</label>
                  <textarea
                    name="description"
                    className="form-control input-width"
                    id=""
                    required
                    placeholder="Job Description"
                  ></textarea>
                </div>
                <Inputs
                  label="Company Name"
                  name="name"
                  placeholder="Company Name"
                />
                <div className="mb-lg-2 w-100">
                  <label className="label">Company Logo</label>
                  <div>
                    <input
                      type="file"
                      name="file"
                      className="form-control"
                      accept="image/*"
                      id=""
                      required
                    />
                  </div>
                </div>

                <div className="mb-lg-2 w-100">
                  <label className="label">Job Requirements</label>
                  <textarea
                    name="requirements"
                    className="form-control input-width"
                    id=""
                    required
                    placeholder="Separate them using ###"
                  ></textarea>
                </div>
                <Inputs
                  label="Skill Sets"
                  name="skills"
                  placeholder="Separate them using ###"
                />
                <div className="mb-lg-2 w-100">
                  <label className="label">Job Responsibilities</label>
                  <textarea
                    name="responsibilities"
                    className="form-control input-width"
                    id=""
                    required
                    placeholder="Separate them using ###"
                  ></textarea>
                </div>
                <div className="mb-lg-2 w-100">
                  <label className="label">Workplace Type</label>
                  <select
                    required
                    className="form-control"
                    name="workplace"
                    id=""
                  >
                    <option value="onsite">On Site</option>
                    <option value="hybrid">HyBrid</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
                <Inputs
                  label="Job location"
                  name="location"
                  placeholder="Job location"
                />
                <div className="mb-lg-2 w-100">
                  <label className="label">Job Type</label>
                  <select required className="form-control" name="type" id="">
                    <option value="fulltime">Full Time</option>
                    <option value="parttime">Part Time</option>
                    <option value="contact">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="float-end mt-3">
                <button
                  type="submit"
                  className="btn btn-primary px-3 rounded-pill"
                >
                  {loading ? "Loading..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobPostModal;
