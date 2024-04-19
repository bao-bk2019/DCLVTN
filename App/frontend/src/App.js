import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Footer from './components/Footer/index.jsx';
import Home from './features/home/index.jsx'
import SignIn from './features/signin/index.jsx';
import SignupForm from './features/signup/index.jsx';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import { useState, useEffect } from 'react';
import User from './features/user/index.jsx'
import Profile from './features/user/profile/index.jsx'
import Languague from './features/user/language/index.jsx'
import Help from './features/user/help/index.jsx'
import Notification from './features/user/notification/index.jsx'
import Security from "./features/user/security/index.jsx";
import Security from "./features/user/security/index.jsx";
import Edit from './features/user/edit/index.jsx'
import Tutorial from './features/tutorial/index.jsx';
<<<<<<< HEAD
import GetStarted from './features/tutorial/getstarted/first/index.jsx';
=======
import Security from './features/user/security/index.jsx';
import GetStarted from './features/tutorial/getstarted/first/index.jsx';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});
>>>>>>> 83fec3a (update account management with tutorial)

import { AuthProvider } from "./AuthContext.js";
import Tutorial from "./features/tutorial/index.jsx";
import GetStarted from "./features/tutorial/getstarted/first/index.jsx";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <SignupForm />
}

function App() {

  const [excelData, setExcelData] = useState(null);
  const [pageLocation, setPageLocation] = useState('home')
  const location = useLocation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // execute on location change
    setCount(count + 1);
    console.log('Location changed!', location.pathname);
    if (location === '/home')
      setPageLocation('home');
    else setPageLocation('main');
  }, [location]);

  const userList = [
    { path: 'profile', element: <Profile /> },
    { path: 'edit', element: <Edit /> },
    { path: 'notification', element: <Notification /> },
    { path: 'security', element: <Security /> },
    { path: 'language', element: <Languague /> },
    { path: 'help', element: <Help /> },
  ];
  const tutorialList = [
    { path: 'get-started', element: <GetStarted /> },
  ];
  return (
    <div className='main-app'>
      <Header nameActive={currentUser} />
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/home" element={<Home />} />

  {/* Protected routes */ }
        <Route path="/calculate" element={<ProtectedRoute><AppHeader setExcelData={setExcelData} excelData={excelData} /></ProtectedRoute>} />
        <Route path="/user/*" element={<ProtectedRoute><User /></ProtectedRoute>}>
          <Route index element={<Profile />} />
          {userList.map((item) => <Route path={item.path} element={item.element} />)}
        </Route>
        <Route path="tutorial" element={<ProtectedRoute><Tutorial /></ProtectedRoute>}>
          <Route index element={<GetStarted />} />
          {tutorialList.map((item) => <Route path={item.path} element={item.element} />)}
        </Route>
  {/* Not found route */ }
  <Route path="*" element={<NotFound />} />
      </Routes >
    </div >
  );
}

export default App