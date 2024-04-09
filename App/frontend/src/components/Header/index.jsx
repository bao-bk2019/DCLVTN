import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


const Header = ({ nameActive, logoutFunction }) => {
    if (nameActive === false) {
        return (
            <div>
                <div className="div-2">
                    <div className="div-3">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ce34dc3d81cca3d32ea8333e52136f592948ab8a491e54e55f9e51ce2f0bd0c?apiKey=afa45b72ad7c46798aa3d2761c2357ac&"
                            alt="Company Logo"
                            className="img"
                        />
                        <Link Link to="/home" style={{ textDecoration: "none" }}>
                            <div className="div-4">
                                <span style={{ color: `rgba(33,113,122,1)` }}>PreKnow</span>
                            </div>
                        </Link>

                    </div>
                    <div className="div-5">
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-section');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>About</button>
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-service');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Our Services</button>
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-andvantages');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Service Map</button>
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Contact Us</button>

                    </div>
                    <div className="div-10">

                        <Link to="signin" style={{ textDecoration: "none" }}>{"Login"}</Link>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            {/* <div className="div-2">
                <div className="div-3">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ce34dc3d81cca3d32ea8333e52136f592948ab8a491e54e55f9e51ce2f0bd0c?apiKey=afa45b72ad7c46798aa3d2761c2357ac&"
                        alt="Company Logo"
                        className="img"
                    />
                    <Link Link to="/home" style={{ textDecoration: "none" }}>
                        <div className="div-4">
                            <span style={{ color: `rgba(33,113,122,1)` }}>PreKnow</span>
                        </div>
                    </Link>

                </div>
                <div className="div-5">
                    <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        const element = document.getElementById('my-section');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>About</button>
                    <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        const element = document.getElementById('my-service');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>Our Services</button>
                    <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        const element = document.getElementById('my-andvantages');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>Service Map</button>
                    <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                        const element = document.getElementById('my-contact');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>Contact Us</button>

                </div>
                <button className="div-10" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)" }} onClick={e => logoutFunction(e)}>
                    Logout
                </button>
            </div> */}
            <header className="header">
                <div className="header-content">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e65c1ec342478f88acf7f24910ab5f78a6b5a3351e5684851839a2d9d4d018b9?apiKey=afa45b72ad7c46798aa3d2761c2357ac&" alt="Logo" className="logo" />
                    <nav className="navigation">
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-section');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>About</button>
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-service');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Our Services</button>
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-andvantages');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Service Map</button>
                        <button className="btn" style={{ backgroundColor: "white", color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
                            const element = document.getElementById('my-contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Contact Us</button>
                    </nav>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/af73bb1d467a2b8a54921bc157cdeacd54bfd188dcb60f3393f3a26ab246d56c?apiKey=afa45b72ad7c46798aa3d2761c2357ac&" alt="Profile" className="profile-image" />
                </div>
            </header>
        </div>
    );
}

export default Header;

