import React from 'react';
import TableFeature from '../table';
// import { Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
// import { Link, Outlet } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';
import './styles.scss'
import Descriptive from './descriptive';
import LSTMPredict from './LSTM';
import Clustering from './clustering';
import PCA from './PCA';
function AppHeader({ excelData, setExcelData }) {
    const [choice, setChoice] = React.useState('Descriptive');
    const handleChoice = (event, newChoice) => {
        if (newChoice !== null) {
            setChoice(newChoice);
        }
    };
    // const listOfChoice = [];
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
                <ToggleButton value="Descriptive" sx={{ '&:hover': { textDecoration: 'underline' } }} className='NavItem'>
                    Descriptive
                </ToggleButton>
                <ToggleButton value="Cluster" sx={{ '&:hover': { textDecoration: 'underline' } }} className='NavItem'>
                    Cluster
                </ToggleButton>
                <ToggleButton value="PCA" sx={{ '&:hover': { textDecoration: 'underline' } }} className='NavItem'>
                    PCA
                </ToggleButton>
                <ToggleButton value="LSTM" sx={{ '&:hover': { textDecoration: 'underline' } }} className='NavItem'>
                    LSTM
                </ToggleButton>
            </ToggleButtonGroup>
            <AnalysisBoard type={choice} />
            {/* <Outlet /> */}
        </div>
    );
};

export default AppHeader;