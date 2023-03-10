import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import MenuBar from '../Components/MenuBar/MenuBar';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <MenuBar></MenuBar>
            <div className='row  container mx-auto'>
                <div className="col-lg-3 p-0 padding">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='col-lg-6 p-0 padding mt-lg-0 mt-4'>
                    <Outlet></Outlet>
                </div>
                <div className='col-lg-3 p-0 padding d-none d-lg-block'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Main;