import React from 'react'
import SideBar from './sideBar/index.jsx'
import {Route, Routes } from 'react-router-dom';
import Profile from './profile/index.jsx'
import Languague from './language/index.jsx'
import Help from './help/index.jsx'
import Notification from './notification/index.jsx'
import Edit from './edit/index.jsx'
import './style.scss';
function User() {
  return (
    <div className='mainpage'>
      <SideBar/>
      <div className='content'>
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="edit" element={<Edit />} />
              <Route path="notification" element={<Notification />} />
              <Route path="language" element={<Languague />} />
              <Route path="help" element={<Help />} />
            </Routes>
        </div>
    </div>
  )
}

export default User