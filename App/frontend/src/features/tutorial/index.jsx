import React from 'react'
import './styles.scss'
import {Route, Routes} from 'react-router-dom';
import getStarted from './getstarted/first';
import TableContent from './tableContent'

function Tutorial() {
  return (
    <div>
      <TableContent/>
      <Routes>
        <Route path='/get-started' element={<getStarted />} />
      </Routes>
    </div>
  )
}

export default Tutorial