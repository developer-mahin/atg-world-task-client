import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';


const Register = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { createUser, updateUserName, facebookLogin, googleSignIn } = useContext(AUTH_CONTEXT)

    const [changePasswordType, setChangePasswordType] = useState(true)
    const changeIcon = changePasswordType === true ? false : true;

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || "/"

    const handleSignUp = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const image = form.image.files[0]

        const formData = new FormData()
        formData.append("image", image)

        const fullName = firstName + " " + lastName

        if (!(password === confirmPassword)) {
            return toast.error("Password not matched")
        }

        const url = `https://api.imgbb.com/1/upload?key=b486f58b0681b7c344264f43dd69a0d8`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url
                createUser(email, password)
                    .then((result) => {
                        const user = result.user
                        updateUserName(fullName, image)

                        const userInfo = {
                            email: user?.email,
                            name: user?.displayName,
                            photo: user?.photoURL
                        }

                        fetch("https://huntyourjob.vercel.app/jwt", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(userInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                localStorage.setItem("access-token", data.token)
                                // save user in db
                                const userInfo = {
                                    email,
                                    name: fullName,
                                    photo: image
                                }
                                saveUserInDB(userInfo)
                                toast.success("successfully user created")
                                navigate(from, { replace: true })
                                form.reset()
                                setLoading(false)
                            })
                    })
                    .catch(error => {
                        toast.error(error.message)
                        setLoading(false)
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // google login system
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                    photo: user?.photoURL
                }
                fetch("https://huntyourjob.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("access-token", data.token)

                        // save user in db
                        saveUserInDB(userInfo)
                        navigate(from, { replace: true })
                        toast.success("successfully login")
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    // facebook login system 
    const handleFacebookSignIn = () => {
        facebookLogin()
            .then(result => {
                const user = result.user
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                    photo: user?.photoURL
                }
                fetch("https://huntyourjob.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("access-token", data.token)
                        // save user in db
                        saveUserInDB(userInfo)
                        navigate(from, { replace: true })
                        toast.success("Successfully login")
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    //save user in the database
    const saveUserInDB = (userInfo) => {
        fetch("https://huntyourjob.vercel.app/save-user", {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div className='position-relative container mx-auto py-2'>
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
                            <Link to="/login" className='text-blue close_button ms-1'>Sign In</Link></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <form onSubmit={handleSignUp}>
                            <div className='d-flex justify-content-between align-items-center pb-2'>
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
                            <div className='pb-2'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    id=""
                                    required
                                    className='form-control'
                                />
                            </div>

                            <div className='pb-2'>
                                <input
                                    type="file"
                                    name="image"
                                    id=""
                                    required
                                    className='form-control'
                                />
                            </div>

                            <div className='pb-2 position-relative'>
                                <input
                                    type={changePasswordType ? "password" : "text"}
                                    name="password"
                                    id=""
                                    required
                                    className='form-control'
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {
                                    changePasswordType ? <FiEyeOff
                                        onClick={() => {
                                            setChangePasswordType(changeIcon);
                                        }}
                                        className='eye-button'></FiEyeOff> :
                                        <AiOutlineEye
                                            onClick={() => {
                                                setChangePasswordType(changeIcon);
                                            }}
                                            className='eye-button'></AiOutlineEye>
                                }

                            </div>
                            <div className='pb-2'>
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
                                <button
                                    type="submit"
                                    className='btn-blue btn rounded-pill w-50 w-md-100 fw-medium mt-3 py-2 border'
                                >
                                    {loading ? "Loading..." : "Create Account"}
                                </button>
                                <div className='d-block d-md-none mt-4'>
                                    <Link to="/login" className='fw-medium text-decoration-underline'>or, Sign In</Link>
                                </div>
                            </div>
                        </form>
                        <div className='mt-4'>
                            <div className=''>
                                <button
                                    onClick={handleFacebookSignIn}
                                    className='w-100 d-flex justify-content-center align-items-center gap-1 border btn py-2 px-4 my-2 fw-medium'>
                                    <img width={"25px"} src=" https://i.ibb.co/9Y0S2nP/facebook.png" alt="" />
                                    <span>Sign up with Facebook</span>
                                </button>
                                <button
                                    onClick={handleGoogleLogin}
                                    className='w-100 d-flex justify-content-center align-items-center gap-1 border btn py-2 px-4 my-2 fw-medium'>
                                    <img width={"25px"} src="https://i.ibb.co/LCqGCxS/google.png" alt="" />
                                    <span>Sign up with Google</span>
                                </button>
                                <div className='d-block d-md-none mt-5'>
                                    <p className='text-center w-75 mx-auto fw-medium'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col d-none d-md-block'>
                        <div>
                            <img src="https://i.ibb.co/W0sFNH3/atg-illustration.png" alt="" />
                        </div>
                        <div>
                            <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>
            </>
        </div >
    );
};

export default Register;
