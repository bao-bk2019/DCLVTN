// import './App.css';
// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';

// import Footer from './components/Footer/index.jsx';
// import Home from './features/home/index.jsx'
// import AppHeader from './features/dashboard/index.jsx';
// import SignIn from './features/signin/index.jsx';
// import SignupForm from './features/signup/index.jsx';
// import Chart from './features/chart/index.jsx'
// import Action1 from './features/action1/index.jsx';
// import Action2 from './features/action2/index.jsx'
// import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
// import Header from './components/Header/index.jsx';
// import User from './features/user/index.jsx'
// import Profile from './features/user/profile/index.jsx'
// import Languague from './features/user/language/index.jsx'
// import Help from './features/user/help/index.jsx'
// import Notification from './features/user/notification/index.jsx'
// import Edit from './features/user/edit/index.jsx'










//   if (currentUser) {
//     return (
//       <div>
//         <Header nameActive={currentUser} currentPage={pageLocation} logoutFunction={submitLogout} />
//         <Routes>
//           <Route path='/home' element={<Home />} />
//           <Route path='/calculate' element={<AppHeader setExcelData={setExcelData} excelData={excelData} />}>
//             {/* <Route path='chart' element={<Chart />} />
//             <Route path='action1' element={<Action1 data={excelData} />} />
//             <Route path='action2' element={<Action2 data={excelData} />} /> */}
//           </Route>
//         </Routes>
//       </div>
//     );
//   }
//   return (
//     <>
//       <Header nameActive={currentUser} />
//       <Routes>
//         <Route path='/home' element={<Home />} />
//         <Route path='/signin' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
//         <Route path='/signup' element={<SignupForm />} />
//         <Route path='/*' element={<SignIn submitLogin={submitLogin} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />} />
//         <Route path="/user" element={<User />} >
//           <Route index element={<Profile />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="edit" element={<Edit />} />
//           <Route path="notification" element={<Notification />} />
//           <Route path="language" element={<Languague />} />
//           <Route path="help" element={<Help />} />
//         </Route>
//       </Routes>
//       {/* <Outlet /> */}
//     </>
//   );
// }
// export default App;



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
    <>
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
    </>
  );
}

export default App