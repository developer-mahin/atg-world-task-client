import React from 'react';
import { Link } from 'react-router-dom';
import { HiThumbDown } from "react-icons/hi";

const ErrorPage = () => {
    const errorPageBg = {
        backgroundImage: `url(${"https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png"})`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div style={errorPageBg}>
            <section className="container mx-auto d-flex justify-content-center text-center">
                <div className="">
                    <HiThumbDown className="text-success" style={{ fontSize: "90px" }} />
                    <div className="">
                        <p className="text-info" style={{ fontSize: "30px", fontWeight: 600 }}>
                            Sorry, we couldn't find this page.
                        </p>
                        <div>
                            <Link to="/" className='btn btn-info px-3 rounded-pill fw-semibold text-light'>Back to home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;