import {React, useState, useEffect} from 'react'
import './styles.scss'
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Plot from 'react-plotly.js';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

function RFMAnalysis() {
    const [recency, setRecency]  = useState('');
    const [frequency, setFrequency] = useState('');
    const [monetary, setMonetary] = useState('');
    const [rtype, setRtype] = useState('');
    const [ftype, setFtype] = useState('');
    const [mtype, setMtype] = useState('');
    const [id, setId] = useState('');

    const [columns, setColumns] = useState(['example1', 'example2']);

    const recencyType = [{name: 'Number of days', value:'num'}, {name: 'Date', value:'date'}];
    const frequencyType = [{name: 'Amount', value:'amount'}, {name: 'Value counts', value:'value_counts'}];
    const monetaryType = [{name: 'Amount', value:'amount'}, {name: 'Sum', value:'sum'}];
  return (
    <div>
    <div className="classifi-value">
        <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} key="recency">
                <div className="var-item">Recency Data: </div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Data</InputLabel>
                    <Select
                    labelId="demo-select-small-label"
                    // id=""
                    value={recency}
                    label="DataRecency"
                    onChange={(e) => setRecency(e.target.value)}
                    >
                    {columns.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                    <FormHelperText>Select the name of the column containing data about recency.</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Current Type</InputLabel>
                    <Select
                    labelId="demo-select-small-label"
                    // id=""
                    value={rtype}
                    label="DataTypeRecency"
                    onChange={(e) => setRtype(e.target.value)}
                    >
                    {recencyType.map((item) => <MenuItem value={item.value}>{item.name}</MenuItem>)}
                    </Select>
                    <FormHelperText>Select the name of the column containing data about recency.</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key="frequency">
                <div className="var-item">Frequency Data:</div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Data</InputLabel>
                    <Select
                    labelId="demo-select-small-label"
                    // id=""
                    value={frequency}
                    label="DataFrequency"
                    onChange={(e) => setFrequency(e.target.value)}
                    >
                    {columns.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                    <FormHelperText>Select the name of the column containing data about frequency.</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Current Type</InputLabel>
                    <Select
                    labelId="demo-select-small-label"
                    // id=""
                    value={ftype}
                    label="DataTypeFrequency"
                    onChange={(e) => setFtype(e.target.value)}
                    >
                    {frequencyType.map((item) => <MenuItem value={item.value}>{item.name}</MenuItem>)}
                    </Select>
                    <FormHelperText>Select the name of the column containing data about frequency.</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key="frequency">
                <div className="var-item">Monetary Data:</div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Data</InputLabel>
                    <Select
                    labelId="demo-select-small-label"
                    // id=""
                    value={monetary}
                    label="DataMonetary"
                    onChange={(e) => setMonetary(e.target.value)}
                    >
                    {columns.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                    <FormHelperText>Select the name of the column containing data about frequency.</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Current Type</InputLabel>
                    <Select
                    labelId="demo-select-small-label"
                    // id=""
                    value={mtype}
                    label="DataTypeMonetary"
                    onChange={(e) => setMtype(e.target.value)}
                    >
                    {monetaryType.map((item) => <MenuItem value={item.value}>{item.name}</MenuItem>)}
                    </Select>
                    <FormHelperText>Select the name of the column containing data about monetary.</FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
        <div className="var-item">Select Customer Identity columns:</div>
        <Box>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Identity</InputLabel>
            <Select
            labelId="demo-select-small-label"
            // id=""
            value={id}
            label="Identity"
            onChange={(e) => setRecency(e.target.value)}
            >
            {columns.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
            </Select>
            <FormHelperText>Select the name of the column containing data about customer identity.</FormHelperText>
        </FormControl>
        </Box>
        <Button variant="contained">Analysis</Button>
        </Box>
    </div>
    <h2 className='rfm-heading'>RFM Score Table and Ranking</h2>
    <Button variant="contained">Export</Button>
    {/* Excel data here */}
    <h2 className='rfm-heading'>RFM Histogram</h2>
    <Plot
        data={[
            {
                x: [1,2,4,5,9,7,8,5,4,3,2,1],
                type: 'histogram',
                name: 'Monetary',
            },
            {
                x: [1,2,4,5,9,7,8,5,4,3,2,1],
                xaxis: 'x2',
                yaxis: 'y2',    
                type: 'histogram',
                name: 'Recency',
            },
            {
                x: [1,2,4,5,9,7,8,5,4,3,2,1],
                xaxis: 'x3',
                yaxis: 'y3',    
                type: 'histogram',
                name: 'Frequency',
            }
        ]}
        layout={ {width: 640, height: 480, title: 'Histogram', grid: {rows: 1, columns: 3, pattern: 'independent'},} }
        style={{flex: '1 1 0%'}}
      />
    {/* Illustration: https://rfm.rsquaredacademy.com/articles/rfm-customer-level-data_files/figure-html/rfmhist-1.png */}
    <h2 className='rfm-heading'>Segmented Customer Data</h2>
    <Button variant="contained">Export</Button>
    {/* Excel data here */}
    </div>
  )
}

export default RFMAnalysis