import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import loginImage from "../../Assets/atg_illustration.png"


const SignUpModal = ({ isOpen, modalIsOpen, customStyles, closeModal, afterOpenModal, setChangeModalForm }) => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;

        if (!(password === confirmPassword)) {
            return toast.error("Password not matched")
        }



    }

    return (
        <div className='position-relative'>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className='position-absolute top-0 end-0'>
                    <AiOutlineCloseCircle className='fs-2 close_button' onClick={closeModal} />
                </div>
                <div className='bg-success bg-opacity-10 rounded mt-3 d-none d-md-block'>
                    <p className='p-3 text-success fw-semibold'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='mb-3'>
                            <h2>Create Account</h2>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='fw-semibold'>Already have an account?
                                <span className='text-blue close_button ms-1'
                                    onClick={(e) => setChangeModalForm(e.target.innerText)}>Sign In</span></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <form onSubmit={handleSignUp}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <input
                                        type="text"
                                        name='firstName'
                                        required
                                        placeholder='First Name'
                                        className='form-control'
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        id=""
                                        placeholder='Last name'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        id=""
                                        required
                                        className='form-control'
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id=""
                                        required
                                        className='form-control'
                                        placeholder='Password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id=""
                                        required
                                        className='form-control'
                                        placeholder='Confirm Password'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type="submit" className='btn-blue btn rounded-pill w-50 w-md-100 fw-medium mt-3 py-2 border'>Create Account</button>
                                    <div className='d-block d-md-none mt-4'
                                        onClick={(e) => setChangeModalForm(e.target.innerText)}>
                                        <p className='fw-medium text-decoration-underline'>or, Sign In</p>
                                    </div>
                                </div>
                            </form>
                            <div className='mt-4'>
                                <div className=''>
                                    <button className='w-100 border btn py-2 px-4 my-2 fw-medium'>
                                        <span>Sign up with Facebook</span>
                                    </button>
                                    <button className='w-100 border btn py-2 px-4 my-2 fw-medium'>
                                        <span>Sign up with Google</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col d-none d-md-block'>
                            <div>
                                <img src={loginImage} alt="" />
                            </div>
                            <div>
                                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        </div>
                    </div>

                </>

            </Modal>
        </div>
    );
};

export default SignUpModal;