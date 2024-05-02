import React, { useEffect } from 'react';
import TableFeature from '../table';
// import { Button } from 'react-bootstrap';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
// import { Link, Outlet } from 'react-router-dom';
import './styles.scss'
import Descriptive from './descriptive';
import Forecasting from './Forecasting';
import Clustering from './clustering';
import PCA from './PCA';
import RFMAnalysis from './RFM';
function AppHeader({ excelData, setExcelData }) {
    const [choice, setChoice] = React.useState('Descriptive');
    const handleChoice = (event, newChoice) => {
        if (newChoice !== null) {
            setChoice(newChoice);
        }
    };
    const listOfChoice = [
        {name: 'Descriptive', element: <Descriptive />},
        {name: 'Cluster', element: <Clustering />},
        // {name: 'PCA', element: <PCA />},
        {name: 'Forecasting ', element: <Forecasting />},
        {name: 'RFM', element: <RFMAnalysis />},
    ];
    return (
        <div className='main-container'>
            <h2 className='h2-text' id='my-overview'>Overview</h2>
            <div className='mx-auto'>   
                <TableFeature excelData={excelData} setExcelData={setExcelData} />
            </div>
            <h2 className='h2-text' id='my-analysis'>Analysis</h2>
            <ToggleButtonGroup
                value={choice}
                exclusive
                onChange={handleChoice}
                color='primary'
            >
                {listOfChoice.map((item) => 
                    <ToggleButton value={item.name} sx={{ '&:hover': { textDecoration: 'underline' } }} className='NavItem'>
                    {item.name}
                    </ToggleButton>
            )}
            </ToggleButtonGroup>
            {listOfChoice.map((item) => (choice === item.name)? item.element: null)}
        </div>
    );
};

export default AppHeader;