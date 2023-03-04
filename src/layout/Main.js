import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import MenuBar from '../Components/MenuBar/MenuBar';
import RightSideBar from '../RightSideBar/RightSideBar';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <MenuBar></MenuBar>
            <div className='row  container mx-auto'>
                <div className='col-md-8 p-0'>
                    <Outlet></Outlet>
                </div>
                <div className='col-md-4'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Main;