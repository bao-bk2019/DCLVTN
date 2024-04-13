
import React from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Home from './features/home/index.jsx'
import SignIn from './features/signin/index.jsx';
import SignupForm from './features/signup/index.jsx';
import ProtectedRoute from "./components/ProtectedRoute"
import NotFound from "./features/notfound/NotFound.jsx";
import AppHeader from './features/dashboard/index.jsx';
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

  if (currentUser) {
    return (
      <div>
        <Header nameActive={currentUser} currentPage={pageLocation} logoutFunction={submitLogout} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/tutorial' element={<Tutorial/>}/>
          <Route path='/calculate' element={<AppHeader setExcelData={setExcelData} excelData={excelData} />}>
            {/* <Route path='chart' element={<Chart />} />
            <Route path='action1' element={<Action1 data={excelData} />} />
            <Route path='action2' element={<Action2 data={excelData} />} /> */}
          </Route>
        </Routes>
      </div>
    );
  }
>>>>>>> 83fec3a (update account management with tutorial)
  return (
    <AuthProvider>
      <Header currentPage={pageLocation} />
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/home" element={<Home />} />

        {/* Protected routes */}
        <Route path="/calculate" element={<ProtectedRoute><AppHeader setExcelData={setExcelData} excelData={excelData} /></ProtectedRoute>} />
        <Route path="/user/*" element={<ProtectedRoute><User /></ProtectedRoute>}>
=======
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/tutorial' element={<Tutorial/>}/>
        <Route path='/*' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
        
        <Route path="/user" element={<User />} >
>>>>>>> 83fec3a (update account management with tutorial)
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<Edit />} />
          <Route path="notification" element={<Notification />} />
          <Route path="security" element={<Security />} />
          <Route path="language" element={<Languague />} />
          <Route path="help" element={<Help />} />
        </Route>
        {/* Not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App