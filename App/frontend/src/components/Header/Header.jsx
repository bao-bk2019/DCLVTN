import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import './styles.scss';
import logo from '../Img/justLogo.png'
import AvatarDropdown from './Dropdown/Dropdown.jsx'
import { useAuth } from '../Auth/AuthContext.js';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
// function scrollToId(id){
//     console.log("go to " + id)
//     const element = document.getElementById(id);
//     element?.scrollIntoView({
//             behavior: 'smooth'
//     });
// }


const Header = ({ currentPage}) => {
    const location = useLocation();
    // useEffect(() => {
    //     // execute on location change
    //     // setCount(count + 1);
    //     // console.log('Location changed!', location.pathname);
    //     if (location === '/home')
    //       setPageLocation('home');
    //     else setPageLocation('main');
    //   }, [location]);
    // useEffect(() => {},[location]);
    const { isAuthorized } = useAuth();
    if (!isAuthorized) {
    return (
        <header className='bg-blue-950 p-0'>
            <nav className='mx-auto flex items-center justify-between p-6 max-w-7xl '>
                <div className='flex lg:flex-1'>
                    <Link to="/home" className="-m-1.5 p-1.5 flex flex-row">
                    <img
                        loading="lazy"
                        src={logo}
                        alt="Company Logo"
                        className="h-8 w-auto"
                    />
                    <span className='text-xl p-0.5 font-bold text-logo-color'>
                        Data&Retailers
                    </span>
                    </Link>
                
                </div>
                <div className='flex self-stretch justify-between'>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-section');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>About</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-service');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Our Services</Button>
                    {/* <Button variant="text" className='text-xl'>Text</Button> */}
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Contact Us</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}}>SURVEY</Button>
                </div>
                <div className="flex flex-1 justify-end">
                
                <Link to="/login" className="text-xl font-semibold leading-6 text-logo-color">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
                </div>
            </nav>
        </header>
    )}
    else if (location.pathname === '/home') {
        console.group("I'm home")
    return (
        <header className='bg-blue-950 p-0'>
            <nav className='mx-auto flex items-center justify-between p-6 max-w-7xl '>
                <div className='flex lg:flex-1'>
                    <Link to="/home" className="-m-1.5 p-1.5 flex flex-row">
                    <img
                        loading="lazy"
                        src={logo}
                        alt="Company Logo"
                        className="h-8 w-auto"
                    />
                    <span className='text-xl p-0.5 font-bold text-logo-color'>
                        Data&Retailers
                    </span>
                    </Link>
                
                </div>
                <div className='flex self-stretch justify-between'>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-section');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>About</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-service');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Our Services</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Contact Us</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}}>SURVEY</Button>
                </div>
                <div className="flex flex-1 justify-end">
                
                <Link to="/logout" className="text-xl font-semibold leading-6 text-logo-color">
                    Log out <span aria-hidden="true">&rarr;</span>
                </Link>
                </div>
            </nav>
        </header>
    )}
    return (
        <header className='bg-blue-950 p-0'>
            <nav className='mx-auto flex items-center justify-between p-6 max-w-7xl '>
                <div className='flex lg:flex-1'>
                    <Link to="/home" className="-m-1.5 p-1.5 flex flex-row">
                    <img
                        loading="lazy"
                        src={logo}
                        alt="Company Logo"
                        className="h-8 w-auto"
                    />
                    <span className='text-xl p-0.5 font-bold text-logo-color'>
                        Data&Retailers
                    </span>
                    </Link>
                
                </div>
                {/* <div className='flex self-stretch justify-between'>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-section');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>About</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-service');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Our Services</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}} onClick={() => {
                            const element = document.getElementById('my-contact');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}>Contact Us</Button>
                    <Button variant="text" sx ={{fontSize: '1rem', color: 'rgb(56 189 248)', fontWeight: 700}}>SURVEY</Button>
                </div> */}
                <div className="flex flex-1 justify-end">
                
                <Link to="/logout" className="text-xl font-semibold leading-6 text-logo-color">
                    Log out <span aria-hidden="true">&rarr;</span>
                </Link>
                </div>
            </nav>
        </header>
    ) 
}
export default Header;
// const Header = ({ currentPage}) => {
//     const { isAuthorized } = useAuth();
//     if (!isAuthorized) {
//         return (
//             <header className="header-main">
//                 <div className="div-2">
//                     <div className="div-3">
//                         <Link Link to="/home" style={{ textDecoration: "none" }}>
//                             <img
//                                 loading="lazy"
//                                 src={logo}
//                                 alt="Company Logo"
//                                 className="img"
//                             />
//                         </Link>

//                     </div>
//                     <div className="div-5">
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-section');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>About</button>
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-service');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>Our Services</button>
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-andvantages');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>Service Map</button>
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-contact');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>Contact Us</button>

//                     </div>
//                     <div className="div-10">
//                         <Link to="/login" style={{ textDecoration: "none" }}>{"Login"}</Link>
//                     </div>
//                 </div>
//             </header>
//         );
//     }
//     else if (currentPage === 'home') {
//         return (
//             <div className="header-main">
//                 <div className="div-2">
//                     <div className="div-3">
//                         <Link Link to="/home" style={{ textDecoration: "none" }}>
//                             <img
//                                 loading="lazy"
//                                 src={logo}
//                                 alt="Company Logo"
//                                 className="img"
//                             />
//                         </Link>

//                     </div>
//                     <div className="div-5">
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-section');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>About</button>
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-service');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>Our Services</button>
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-andvantages');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>Service Map</button>
//                         <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                             const element = document.getElementById('my-contact');
//                             element?.scrollIntoView({
//                                 behavior: 'smooth'
//                             });
//                         }}>Contact Us</button>

//                     </div>
//                     <AvatarDropdown />

//                 </div>
//             </div>
//         );
//     }
//     return (
//         <div className="header-main">
//             <div className="div-2">
//                 <div className="div-3">
//                     <Link Link to="/home" style={{ textDecoration: "none" }}>
//                         <img
//                             loading="lazy"
//                             src={logo}
//                             alt="Company Logo"
//                             className="img"
//                         />
//                     </Link>

//                 </div>
//                 <div className="div-5">
//                     <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                         window.location = './home'
//                     }}>Home</button>
//                     <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                         const element = document.getElementById('my-overview');
//                         element?.scrollIntoView({
//                             behavior: 'smooth'
//                         });
//                     }}>Overview</button>
//                     <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                         window.location = '/calculate'
//                     }}>Analysis</button>
//                     <button className="btn" style={{ color: "rgba(0, 72, 255, 1)", fontSize: "20px" }} onClick={() => {
//                         window.location = '/tutorial/get-started'
//                     }}>Tutorial</button>

//                 </div>
//                 <AvatarDropdown />
//             </div>
//         </div>
//     );
// }
// export default Header;
