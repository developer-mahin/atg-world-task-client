import React, { useState } from 'react';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalBody = ({ modalIsOpen, setIsOpen }) => {
    const [changeModalForm, setChangeModalForm] = useState("")

    let subtitle;
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    if (changeModalForm === "Sign In" || changeModalForm === "or, Sign In") {
        return <>
            <SignInModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
                closeModal={closeModal}
                afterOpenModal={afterOpenModal}
                setChangeModalForm={setChangeModalForm}
            ></SignInModal>
        </>
    }

    if (changeModalForm === "Create new for free!" || changeModalForm === "or, Create Account") {
        return <>
            <SignUpModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
                closeModal={closeModal}
                afterOpenModal={afterOpenModal}
                setChangeModalForm={setChangeModalForm}
            ></SignUpModal>
        </>
    }

    return (
        <>
            <SignUpModal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                customStyles={customStyles}
                closeModal={closeModal}
                afterOpenModal={afterOpenModal}
                setChangeModalForm={setChangeModalForm}
            ></SignUpModal>
        </>
    );
};

export default ModalBody;