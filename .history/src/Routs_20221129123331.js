import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const Routs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Routs;