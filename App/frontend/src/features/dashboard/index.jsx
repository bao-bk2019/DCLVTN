import React from 'react';
import TableFeature from '../table';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './styles.scss'
function AppHeader({ excelData, setExcelData }) {
    return (
        <>
            <div className='mx-auto'>
                <TableFeature excelData={excelData} setExcelData={setExcelData} />
            </div>
            <div className='option-features' >
                <Button variant="warming" >
                    <Link to="action1" >Cluster</Link>
                </Button>{' '}
                <Button variant="warming">
                    <Link to="action2">LSTM</Link>
                </Button>{' '}
                <Button variant="warming">
                    <Link to="chart" >Chart</Link>
                </Button>{' '}

            </div>
            <Outlet />
        </>
    );
};

export default AppHeader;