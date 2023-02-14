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
            <div className='row'>
                <div className='col-md-8'>
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