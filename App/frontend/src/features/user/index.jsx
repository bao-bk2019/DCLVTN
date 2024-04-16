import React from 'react'
import SideBar from './sideBar/index.jsx'
import {Route, Routes, Outlet } from 'react-router-dom';
import Profile from './profile/index.jsx'
import Languague from './language/index.jsx'
import Help from './help/index.jsx'
import Notification from './notification/index.jsx'
import Edit from './edit/index.jsx'
import Security from './security/index.jsx';

import './style.scss';
function User() {
  return (
    <div className='mainpage'>
      <SideBar/>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default User