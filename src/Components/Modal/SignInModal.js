import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';




const SignInModal = ({ isOpen, modalIsOpen, closeModal, afterOpenModal, setChangeModalForm }) => {
    const [loading, setLoading] = useState(false)
    const { loginUser } = useContext(AUTH_CONTEXT)

    const handleSignIn = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                toast.success("Successfully user Logedin")
                form.reset()
                closeModal(true)
                setLoading(false)
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            })
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
    };

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
                            <h2>Sign In</h2>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='fw-semibold'>Already have an account?
                                <span className='text-blue close_button ms-1'
                                    onClick={(e) => setChangeModalForm(e.target.innerText)}>Create new for free!</span></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <form onSubmit={handleSignIn}>
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
                                    />
                                </div>
                                <div className='d-flex d-md-block justify-content-between align-items-center'>
                                    <button
                                        type="submit"
                                        className='btn-blue btn rounded-pill w-50 w-md-100 fw-medium mt-3 py-2 border'
                                    >
                                        {
                                            loading ? "Loading..." : "Sign In"
                                        }
                                    </button>
                                    <div className='d-block d-md-none mt-4'
                                        onClick={(e) => setChangeModalForm(e.target.innerText)}>
                                        <p className='fw-medium text-decoration-underline'>or, Create Account</p>
                                    </div>
                                </div>
                            </form>
                            <div className='mt-4'>
                                <div className=''>
                                    <button className='w-100 d-flex justify-content-center align-items-center gap-1 border btn py-2 px-4 my-2 fw-medium'>
                                        <img width={"25px"} src=" https://i.ibb.co/9Y0S2nP/facebook.png" alt="" />
                                        <span>Sign up with Facebook</span>
                                    </button>
                                    <button className='w-100 d-flex justify-content-center align-items-center gap-1 border btn py-2 px-4 my-2 fw-medium'>
                                        <img width={"25px"} src="https://i.ibb.co/LCqGCxS/google.png" alt="" />
                                        <span>Sign up with Google</span>
                                    </button>
                                </div>
                                <p className='fw-semibold text-center mt-2'>Forgot Password?</p>
                            </div>
                        </div>

                        <div className='col d-none d-md-block'>
                            <div className=''>
                                <img src="https://i.ibb.co/W0sFNH3/atg-illustration.png" alt="" />
                            </div>
                        </div>
                    </div>

                </>

            </Modal>
        </div>
    );
};

export default SignInModal;