import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { FiEyeOff } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';


const Login = () => {
    const [loading, setLoading] = useState(false)
    const { loginUser, facebookLogin, googleSignIn } = useContext(AUTH_CONTEXT)
    const [passowrd, setPassword] = useState("")

    const [changePasswordType, setChangePasswordType] = useState(true)
    const changeIcon = changePasswordType === true ? false : true


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
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
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                    photo: user?.photoURL
                }

                // jwt authentication
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("access-token", data.token)
                        toast.success("Successfully user Logedin")
                        navigate(from, { replace: true })
                        form.reset()
                        setLoading(false)
                    })
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
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
                // jwt authentication
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("access-token", data.token)
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
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("access-token", data.token)
                        navigate(from, { replace: true })
                        toast.success("Successfully login")
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className='position-relative container mx-auto py-4'>
            <div>
                <div className='bg-success bg-opacity-10 rounded mt-3 d-none d-md-block'>
                    <p className='p-3 text-success fw-semibold'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='mb-3'>
                            <h2>Sign In</h2>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='fw-semibold'>If are you new?
                                <Link to="/register" className='text-blue close_button ms-1'
                                >Create new for free!</Link></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <form onSubmit={handleSignIn}>
                                <div className='mb-2'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
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
                                <div className='d-flex d-md-block justify-content-between align-items-center'>
                                    <button
                                        type="submit"
                                        className='btn-blue btn rounded-pill w-50 w-md-100 fw-medium mt-3 py-2 border'
                                    >
                                        {
                                            loading ? "Loading..." : "Sign In"
                                        }
                                    </button>
                                    <div className='d-block d-md-none mt-4'>
                                        <Link to="/register" className='fw-medium text-decoration-underline'>or, Create Account</Link>
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
            </div>
        </div>
    );
};

export default Login;