import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.jsx';
import SideNav from '../components/SideNav/SideNav.jsx';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <>
            <SideNav />
            <main className="main-content position-relative border-radius-lg ">
                <NavBar />
                <Outlet />
                <Footer />
            </main>
        </>
    );
};

export default Layout;
