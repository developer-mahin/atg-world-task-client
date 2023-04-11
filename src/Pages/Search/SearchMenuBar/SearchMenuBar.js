import React, { useState } from 'react';
import Companies from '../Tabs/Companies';
import Courses from '../Tabs/Courses';
import Events from '../Tabs/Events';
import Groups from '../Tabs/Groups';
import Jobs from '../Tabs/Jobs';
import People from '../Tabs/People';
import Posts from '../Tabs/Posts';
import Products from '../Tabs/Products';
import Schools from '../Tabs/Schools';
import Services from '../Tabs/Services';

const SearchMenuBar = () => {

    const [changeTab, setChangeTab] = useState("People")


    return (
        <div>
            <div className='py-3 border-bottom shadow-sm'>
                <div className='container mx-auto px-3'>
                    <div>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "People" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}
                        >People</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Jobs" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}
                        >Jobs</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Companies" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>
                            Companies</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Groups" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>Groups</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Posts" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>Posts</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Products" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>Products</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Services" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>Services</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Events" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>
                            Events</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Courses" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>Courses</button>
                        <button
                            onClick={(e) => setChangeTab(e.target.innerText)}
                            className={`${changeTab === "Schools" ? "btn-active" : ""} btn border text-secondary btn-hover rounded-pill px-3 py-2 mx-2 fs-6 my-lg-0 my-1 fw-medium`}>
                            Schools</button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-3 my-3'>
                {
                    changeTab === "People" && <People></People>
                }
                {
                    changeTab === "Jobs" && <Jobs></Jobs>
                }
                {
                    changeTab === "Companies" && <Companies></Companies>
                }
                {
                    changeTab === "Groups" && <Groups></Groups>
                }
                {
                    changeTab === "Posts" && <Posts></Posts>
                }
                {
                    changeTab === "Products" && <Products></Products>
                }
                {
                    changeTab === "Services" && <Services></Services>
                }
                {
                    changeTab === "Events" && <Events></Events>
                }
                {
                    changeTab === "Courses" && <Courses></Courses>
                }
                {
                    changeTab === "Schools" && <Schools></Schools>
                }
            </div>
        </div>
    );
};

export default SearchMenuBar;