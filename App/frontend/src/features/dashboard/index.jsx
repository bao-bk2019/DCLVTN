import React from 'react';
import TableFeature from '../table';
import { Button } from 'react-bootstrap';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Link, Outlet } from 'react-router-dom';
import './styles.scss'
import AnalysisBoard from './analysis';
function AppHeader({ excelData, setExcelData }) {
    const [choice, setChoice] = React.useState('Descriptive');

    const handleChoice = (event, newChoice) => {
        if (newChoice !== null) {
            setChoice(newChoice);
          }
    };
    
    return (
        <div className='main-container'>
            <h2 className='h2-text'>Overview</h2>
            <div className='mx-auto'>
                <TableFeature excelData={excelData} setExcelData={setExcelData} />
            </div>
            <h2 className='h2-text'>Analysis</h2>
            <ToggleButtonGroup
            value={choice}
            exclusive
            onChange={handleChoice}
            color='primary'
            >
                <ToggleButton value="Descriptive" sx={{'&:hover': {textDecoration:'underline'}}} className='NavItem'>
                    Descriptive
                </ToggleButton>
                <ToggleButton value="Cluster"  sx={{'&:hover': {textDecoration:'underline'}}} className='NavItem'>
                    Cluster
                </ToggleButton>
                <ToggleButton value="PCA" sx={{'&:hover': {textDecoration:'underline'}}} className='NavItem'>
                    PCA
                </ToggleButton>
                <ToggleButton value="LSTM" sx={{'&:hover': {textDecoration:'underline'}}} className='NavItem'>
                    LSTM
                </ToggleButton>
            </ToggleButtonGroup>
            
            {/* <div className='nav-analysis'>
                <Button variant="warming">
                    <Link to="" >Cluster</Link>
                </Button>{' '}
                <Button variant="warming">
                    <Link to="">LSTM</Link>
                </Button>{' '}
                <Button variant="warming">
                    <Link to="" >Chart</Link>
                </Button>{' '}

            </div> */}
            <AnalysisBoard type={choice}/>
            
            
            <h2 className='h2-text'>Histogram</h2>
            <Outlet />
        </div>
    );
};

export default AppHeader;