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

<<<<<<< HEAD
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
=======
  function update_form_btn() {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/api/register",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function (res) {
      client.post(
        "/api/login",
        {
          email: email,
          password: password
        }
      ).then(function (res) {
        setCurrentUser(true);
      });
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/login",
      {
        email: email,
        password: password
      }
    ).then(function (res) {
      setCurrentUser(true);
      navigate("/calculate");
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout",
      { withCredentials: true }
    ).then(function (res) {
      setCurrentUser(false);

      navigate("/home");
    });
  }
  // ADD YOUR PATH TO USER MANAGEMENT HERE
  const userList = [
    {id: 0, path: 'profile', element: <Profile />},
    {id: 1, path: 'edit', element: <Edit />},
    {id: 2, path: 'notification', element: <Notification />},
    {id: 3, path: 'security', element: <Security />},
    {id: 4, path: 'language', element: <Languague />},
    {id: 5, path: 'help', element: <Help />},
  ];
  // ADD YOUR PATH TO TUTORIAL PAGE HERE
  const tutorialList = [
    {id: 0, path: 'get-started', element: <GetStarted />},
  ]

  if (currentUser) {
    return (
      <div className='main-app'>
        <Header nameActive={currentUser} currentPage={pageLocation} logoutFunction={submitLogout} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/calculate' element={<AppHeader setExcelData={setExcelData} excelData={excelData} />}/>
          <Route path="/user" element={<User />} >
              <Route index element={<Profile />} />
              {userList.map((item) => <Route path={item.path} element={item.element} />)}
          </Route>
          <Route path='/tutorial' element={<Tutorial/>}>
            <Route index element={<GetStarted />} />
            {tutorialList.map((item) => <Route path={item.path} element={item.element} />)}
          </Route>
        </Routes>
      </div>
    );
  }
>>>>>>> 83fec3a (update account management with tutorial)
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
=======
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/tutorial' element={<Tutorial/>}>
          <Route index element={<GetStarted />} />
          {tutorialList.map((item) => <Route path={item.path} element={item.element} />)}
        </Route>
        <Route path="/user" element={<User />} >
              <Route index element={<Profile />} />
              {userList.map((item) => <Route path={item.path} element={item.element} />)}
          </Route>
        <Route path='/*' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
      </Routes>
    </div>
  );
}

export default App