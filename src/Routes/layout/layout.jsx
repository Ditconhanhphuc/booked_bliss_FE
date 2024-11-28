import './layout.scss';
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from '../../components/context/AuthContext';
import Footer from '../../components/footer/Footer';

function Layout() {
    return (
        <div className='layout'>
            <div className="layout">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

function RequireAuth() {

    const { currentUser } = useContext(AuthContext);

    return !currentUser ? (
        <Navigate to="/login" />
    ) : (
        <div className='layout'>
            <div className="layout">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export { Layout, RequireAuth }