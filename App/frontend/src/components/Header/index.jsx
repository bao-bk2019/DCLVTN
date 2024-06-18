import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from '../Img/logo.png'
import AvatarDropdown from './Dropdown/index.jsx'
import { useAuth } from '../Auth/AuthContext.js';

const Header = ({ currentPage}) => {
    const { isAuthorized } = useAuth();
    if (!isAuthorized) {
        return (
            <header className="header-main">
                <div className="div-2">
                    <div className="div-3">
                        <Link Link to="/home" style={{ textDecoration: "none" }}>
                            <img
                                loading="lazy"
                                src={logo}
                                alt="Company Logo"
                                className="img"
                            />
                        </Link>

                    </div>
                    <div className="div-5">
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-section');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>About</button>
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-service');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Our Services</button>
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-andvantages');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Service Map</button>
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Contact Us</button>

                    </div>
                    <div className="div-10">
                        <Link to="/login" style={{ textDecoration: "none" }}>{"Login"}</Link>
                    </div>
                </div>
            </header>
        );
    }
    else if (currentPage === 'home') {
        return (
            <div className="header-main">
                <div className="div-2">
                    <div className="div-3">
                        <Link Link to="/home" style={{ textDecoration: "none" }}>
                            <img
                                loading="lazy"
                                src={logo}
                                alt="Company Logo"
                                className="img"
                            />
                        </Link>

                    </div>
                    <div className="div-5">
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-section');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>About</button>
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-service');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Our Services</button>
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-andvantages');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Service Map</button>
                        <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Contact Us</button>

                    </div>
                    <AvatarDropdown />

                </div>
            </div>
        );
    }
    return (
        <div className="header-main">
            <div className="div-2">
                <div className="div-3">
                    <Link Link to="/home" style={{ textDecoration: "none" }}>
                        <img
                            loading="lazy"
                            src={logo}
                            alt="Company Logo"
                            className="img"
                        />
                    </Link>

                </div>
                <div className="div-5">
                    <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        window.location = './home'
                    }}>Home</button>
                    <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        const element = document.getElementById('my-overview');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>Overview</button>
                    <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        window.location = '/calculate'
                    }}>Analysis</button>
                    <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        window.location = '/tutorial/get-started'
                    }}>Tutorial</button>

                </div>
                <AvatarDropdown />
            </div>
        </div>
    );
}
export default Header;
