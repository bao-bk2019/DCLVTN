import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import Footer from './components/Footer/index.jsx';
import Home from './features/home/index.jsx'
import AppHeader from './features/dashboard/index.jsx';
import SignIn from './features/signin/index.jsx';
import SignupForm from './features/signup/index.jsx';
import Chart from './features/chart/index.jsx'
import Action1 from './features/action1/index.jsx';
import Action2 from './features/action2/index.jsx'
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import User from './features/user/index.jsx'
import Profile from './features/user/profile/index.jsx'
import Languague from './features/user/language/index.jsx'
import Help from './features/user/help/index.jsx'
import Notification from './features/user/notification/index.jsx'
import Edit from './features/user/edit/index.jsx'
import Tutorial from './features/tutorial/index.jsx';
import Security from './features/user/security/index.jsx';
import getStarted from './features/tutorial/getstarted/first/index.jsx';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});




function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [excelData, setExcelData] = useState(null);

  useEffect(() => {
    client.get("/api/user")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      });
  }, []);
  const [pageLocation, setPageLocation] = useState('home')
  const location = useLocation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // execute on location change
    setCount(count + 1);
    console.log('Location changed!', location.pathname);
    if (location == '/home')
    setPageLocation('home');
    else setPageLocation('main');
  }, [location]);

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
          {/* <Route path='/tutorial' element={<Tutorial/>}/> */}
          <Route path='/calculate' element={<AppHeader setExcelData={setExcelData} excelData={excelData} />}>
            {/* <Route path='chart' element={<Chart />} />
            <Route path='action1' element={<Action1 data={excelData} />} />
            <Route path='action2' element={<Action2 data={excelData} />} /> */}
          </Route>
        </Routes>
      </div>
    );
  }
  return (
    <>
      <Header nameActive={currentUser} />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/tutorial' element={<Tutorial/>}>
          <Route path='get-started' element={<getStarted />}/>
        </Route>
        <Route path='/*' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
        <Route path="/user" element={<User />} >
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<Edit />} />
          <Route path="notification" element={<Notification />} />
          <Route path="security" element={<Security />} />
          <Route path="language" element={<Languague />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
      {/* <Outlet /> */}
    </>
  );
}
export default App;
