import React from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from "react-icons/ai";
import signInImage from "../../Assets/atg_illustration.png"


const SignInModal = ({ isOpen, modalIsOpen, customStyles, closeModal, afterOpenModal, setChangeModalForm }) => {
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
                        <h2>Create Account</h2>
                        <div className='d-none d-md-block'>
                            <p className='fw-semibold'>Already have an account?
                                <span className='text-blue close_button ms-1'
                                    onClick={(e) => setChangeModalForm(e.target.innerText)}>Create new for free!</span></p>
                        </div>
                    </div>
                    <div className='row'>

                        <form className='col'>
                            <input className='form-control' />


                        </form>

                        <div className='col'>
                            <img src={signInImage} alt="" />
                        </div>
                    </div>

                </>

            </Modal>
        </div>
    );
};

export default SignInModal;