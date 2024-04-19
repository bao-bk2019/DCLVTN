
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
import Edit from './features/user/edit/index.jsx'
import Tutorial from './features/tutorial/index.jsx';
import Security from './features/user/security/index.jsx';
import GetStarted from './features/tutorial/getstarted/first/index.jsx';


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
  return (
    <div className='main-app'>
      <Header nameActive={true} currentPage={pageLocation} />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />

        {/* Protected routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/calculate" element={<ProtectedRoute><AppHeader setExcelData={setExcelData} excelData={excelData} /></ProtectedRoute>} />
        <Route path="/user/*" element={<ProtectedRoute><User /></ProtectedRoute>}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit" element={<Edit />} />
          <Route path="notification" element={<Notification />} />
          <Route path="language" element={<Languague />} />
          <Route path="help" element={<Help />} />
        </Route>

        {/* Not found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App