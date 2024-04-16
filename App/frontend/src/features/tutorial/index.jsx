import React from 'react'
import './styles.scss'
import {Route, Routes, Outlet} from 'react-router-dom';
import TableContent from './tableContent'
import GetStarted from './getstarted/first';

function Tutorial() {
  return (
    <div className='main-tutorial'>
      <TableContent/>
      <div className='content-tutorial'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Tutorial