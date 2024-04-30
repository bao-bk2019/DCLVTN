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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const Descriptive = () => {
    // Add UseFetch api/get-columns    
    const [metric, setMetric] = useState(['example1', 'example2', 'example3']);
    const [label, setLabel] = useState(['example1', 'example2', 'example3']);
    //
    const [metricShow, setMetricShow] = useState(true);
    const [multiMetric, setMultiMetric] = useState(true);
    const [labelShow, setLabelShow] = useState(true);

    const [ms, setMs] = useState(false);
    const [ls, setLs] = useState(false);

    // Change depend to metric and label change
    const [metricCheckboxes, setMetricCheckboxes] = useState([
        false, // Checkbox 1
        false, // Checkbox 2
        false  // Checkbox 3
      ]);
    const [labelCheckboxes, setLabelCheckboxes] = useState([
        false, // Checkbox 1
        false, // Checkbox 2
        false  // Checkbox 3
    ]);
    const descriptiveData = 
    [  
        {Gender: 'Female', Mean: 30.17, StdDeviation: 5.95, Minimum: 7.22},
        {Gender: 'Male', Mean: 45.83, StdDeviation: 7.22, Minimum: 34},
    ]
    // const [disabelLabel, setDisabelLabel] = useState([false, false, false]);

    const allUnchecked = (list) => {
        return list.every((checked) => !checked);
    };
    const twoMoreMetric = () => {
        let count = 0;
        for (let i=0; i < metricCheckboxes.length; i++){
            if (metricCheckboxes[i] === true) {
                count += 1;
            }
        }
        if (count >= 2) return true;
        else return false;
    }
    const twoMoreLabel = () => {
        let count = 0;
        for (let i=0; i < labelCheckboxes.length; i++){
            if (labelCheckboxes[i] === true) {
                count += 1;
            }
        }
        if (count >= 2) return true;
        else return false;
    }

    const metricCalculate = ['Mean', 'Median', 'Mode', 'Sum', 'Std. Deviation'];
    const relativeCalculate = ['Frequency', '%'];

    const handleMetricChange = (e) => {
        const nextmetricCheckboxes = metricCheckboxes.map((c, i) => {
            if (i === Number(e.target.value)) {
              return e.target.checked;
            } else {
              // The rest haven't changed
              return c;
            }
        });
        setMetricCheckboxes(nextmetricCheckboxes);
    }
    const handleLabelChange = (e) => {
        const nextlabelCheckboxes = labelCheckboxes.map((c, i) => {
            if (i === Number(e.target.value)) {
              return e.target.checked;
            } else {
              // The rest haven't changed
              return c;
            }
        });
        setLabelCheckboxes(nextlabelCheckboxes);
    }

    useEffect(() => {
        if(metric.length != metricCheckboxes.length) {
            setMetricCheckboxes(metric.fill(false));
        }
        if (label.length != labelCheckboxes.length) {
            setLabelCheckboxes(label.fill(false));
        }
        // Update the document title using the browser API
        if (allUnchecked(metricCheckboxes)) {
            setMetricShow(false);
            // Perform any other side effect when all metricCheckboxes are unchecked
          }
        else {
            setMetricShow(true);
        }

        if (twoMoreMetric()) {
            setMultiMetric(true);
            // Perform any other side effect when all metricCheckboxes are unchecked
          }
        else {
            setMultiMetric(false);
        }
        var checkedBoxes = document.querySelectorAll('input[id=labelcheckbox]');
        if (twoMoreLabel()) {
            for (let i = 0; i < checkedBoxes.length; i++ ) {
                if (checkedBoxes[i].checked === false) {
                    checkedBoxes[i].disabled = true;
                }
            }
           
        }
        else 
            for (let i = 0; i < checkedBoxes.length; i++ ) {
                    checkedBoxes[i].disabled = false;
            }
        if (allUnchecked(labelCheckboxes)) {
            setLabelShow(false);
            // Perform any other side effect when all metricCheckboxes are unchecked
          }
        else {
            setLabelShow(true);
        }
        
        }, [metricCheckboxes, labelCheckboxes, metric, label]);

    return (
    <div>
    <div className="classifi-value">
        <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
                <div className="var-item">Metric Variables: </div>
                <FormGroup row >
                    {metric.map((item, index) => <FormControlLabel control={
                    <Checkbox onChange={handleMetricChange} value={index}/>} 
                    label={item} />)}
                </FormGroup>        
            </Grid>
            <Grid item xs={6}>
                <div className="var-item">Label Variables:</div>
                <FormGroup row>
                    {label.map((item, index) => <FormControlLabel control={
                    <Checkbox onChange={handleLabelChange} name={item} id='labelcheckbox' value={index} />} label={item} />)}
                </FormGroup> 
            </Grid>
        </Grid>
        {(metricShow===true)&&(labelShow===true)? 
        <Box sx={{pt: 4}}>
            <div className="var-item">Calculate:</div>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <FormGroup row>
                        {metricCalculate.map((item) => <FormControlLabel control={<Checkbox  />} label={item} />)}
                    </FormGroup> 
                </Grid>
                <Grid item xs={6}>
                <FormGroup row>
                        {relativeCalculate.map((item) => <FormControlLabel control={<Checkbox />} label={item} />)}
                    </FormGroup> 
                </Grid>
            </Grid>
        </Box>
        : metricShow?
        <Box sx={{pt: 4}}>
            <div className="var-item">Calculate:</div>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <FormGroup row>
                        {metricCalculate.map((item) => <FormControlLabel control={<Checkbox  />} label={item} />)}
                    </FormGroup> 
                </Grid>
            </Grid>
        </Box>
        : labelShow ?
        <Box sx={{pt: 4}}>
        <div className="var-item">Calculate:</div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <FormGroup row>
                    {relativeCalculate.map((item) => <FormControlLabel control={<Checkbox />} label={item} />)}
                </FormGroup> 
            </Grid>
        </Grid>
    </Box>
    :null}

     <Button variant="outlined" startIcon={<ContentCopyIcon />} sx={{mt: 4 }}>Copy</Button>
    <Paper sx={{ width: '50%', overflowX: 'auto', maxHeight: 400}}>
        <TableContainer sx={{}} >
        <Table aria-label="simple table" size='small'>
            <TableHead>
            <TableRow>
            {Object.keys(descriptiveData[0]).map((item) => <TableCell style={{minWidth: 100 }}>{item}</TableCell>)}
            </TableRow>
            </TableHead>
            <TableBody>
            {descriptiveData.map((row) => {
                const name = Object.keys(row);
                return(
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, width:'auto' }}
                >
                {name.map((item) => <TableCell style={{minWidth: 100 }}>{row[item]}</TableCell>)}
                </TableRow>)
            })}
            </TableBody>
        </Table>
        </TableContainer>
    </Paper>

    </Box>
    </div>
    {metricShow?
    <div>
    <h2 className='histogram-heading'>Histogram</h2>
    <Box sx={{display:'flex'}}>
    <FormControl sx={{width:'20%', borderRight:'1px solid rgba(0, 43, 154, .3)'}}>
        <FormLabel id="location-radio-label">Location parameter</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="non"
            name="location-radio-buttons-group"
        >
            <FormControlLabel value="non" control={<Radio />} label="Non" />
            <FormControlLabel value="mean" control={<Radio />} label="Mean" />
            <FormControlLabel value="median" control={<Radio />} label="Median" />
            <FormControlLabel value="mean&median" control={<Radio />} label="Mean & Median" />
        </RadioGroup>
        <FormLabel id="size-radio-label">Size of the graphic</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="medium"
            name="radio-buttons-group"
        >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
            <FormControlLabel value="extralarge" control={<Radio />} label="Extra Large" />
        </RadioGroup>
    </FormControl>
    <Plot
        data={[
            {x: [1,2,4,5,9,7,8,5,4,3,2,1],
            type: 'histogram'}
        ]}
        layout={ {width: 640, height: 480, title: 'Histogram'} }
        style={{flex: '1 1 0%'}}
      />
    </Box>
    <h2 className='histogram-heading'>Box plot</h2>
    <Box sx={{display:'flex'}}>
    <FormControl sx={{width:'20%', borderRight:'1px solid rgba(0, 43, 154, .3)'}}>
        <FormLabel id="orientation-radio-label">Orientation</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="vertical"
            name="orientation-radio-buttons-group"
        >
            <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
            <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
        </RadioGroup>
        <FormLabel id="size-radio-label">Size of the graphic</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="medium"
            name="radio-buttons-group"
        >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
            <FormControlLabel value="extralarge" control={<Radio />} label="Extra Large" />
        </RadioGroup>
    </FormControl>
    <Plot
        data={[
          {
            y: [0, 1, 1, 2, 3, 5, 8, 13, 21],
                // boxpoints: 'all',
                // jitter: 0.3,
                // pointpos: -1.8,
                type: 'box'
          },
        ]}
        layout={ {width: 640, height: 480, title: 'A Fancy Plot'} }
        style={{flex: '1 1 0%'}}
      />
    </Box>
    
    <h2 className='histogram-heading'>Line chart</h2>
    <Box sx={{display:'flex'}}>
    <FormControl sx={{width:'20%', borderRight:'1px solid rgba(0, 43, 154, .3)'}}>

        <FormLabel id="size-radio-label">Size of the graphic</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="medium"
            name="radio-buttons-group"
        >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
            <FormControlLabel value="extralarge" control={<Radio />} label="Extra Large" />
        </RadioGroup>
    </FormControl>
    <Plot
        data={[
            {
                x: [1, 2, 3, 4],
                y: [10, 15, 13, 17],
                type: 'scatter'
              },
        ]}
        layout={ {width: 640, height: 480, title: 'A Fancy Plot'} }
        style={{flex: '1 1 0%'}}
      />
    </Box>
    </div>  
    : null}
    
    {labelShow||multiMetric?

    <div>
    <h2 className='histogram-heading'>Bar chart</h2>
    <Box sx={{display:'flex'}}>
    <FormControl sx={{width:'20%', borderRight:'1px solid rgba(0, 43, 154, .3)'}}>
        
        <FormLabel id="orientation-radio-label">Orientation</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="vertical"
            name="orientation-radio-buttons-group"
        >
            <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
            <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
        </RadioGroup>
        <FormLabel id="size-radio-label">Size of the graphic</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="medium"
            name="radio-buttons-group"
        >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
            <FormControlLabel value="extralarge" control={<Radio />} label="Extra Large" />
        </RadioGroup>

    </FormControl>
    <Plot
        data={[
            {
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            type: 'bar'
            }
        ]}
        layout={ {width: 640, height: 480, title: 'Basic Bar Chart'} }
        style={{flex: '1 1 0%'}}
      />
    </Box>
    </div>
    : null}
    {labelShow?
    <div>
    <h2 className='histogram-heading'>Pie chart</h2>
    <Box sx={{display:'flex'}}>
    <FormControl sx={{width:'20%', borderRight:'1px solid rgba(0, 43, 154, .3)'}}>
        
        <FormLabel id="orientation-radio-label">Orientation</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="vertical"
            name="orientation-radio-buttons-group"
        >
            <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
            <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
        </RadioGroup>
        <FormLabel id="size-radio-label">Size of the graphic</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="medium"
            name="radio-buttons-group"
        >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
            <FormControlLabel value="extralarge" control={<Radio />} label="Extra Large" />
        </RadioGroup>

    </FormControl>
    <Plot
        data={[
            {
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie'
            }
        ]}
        layout={ {width: 640, height: 480, title: 'Basic Pie Chart'} }
        style={{flex: '1 1 0%'}}
      />
    </Box>

    </div>
    : null}
    {multiMetric? 
        <div>
        <h2 className='histogram-heading'>Scatter plot</h2>
        <Box sx={{display:'flex'}}>
        <FormControl sx={{width:'20%', borderRight:'1px solid rgba(0, 43, 154, .3)'}}>
            
            <FormLabel id="orientation-radio-label">Orientation</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="vertical"
                name="orientation-radio-buttons-group"
            >
                <FormControlLabel value="vertical" control={<Radio />} label="Vertical" />
                <FormControlLabel value="horizontal" control={<Radio />} label="Horizontal" />
            </RadioGroup>
            <FormLabel id="size-radio-label">Size of the graphic</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="medium"
                name="radio-buttons-group"
            >
                <FormControlLabel value="small" control={<Radio />} label="Small" />
                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                <FormControlLabel value="large" control={<Radio />} label="Large" />
                <FormControlLabel value="extralarge" control={<Radio />} label="Extra Large" />
            </RadioGroup>
    
        </FormControl>
        <Plot
            data={[
                {
                    x: [2, 3, 4, 5],
                    y: [16, 5, 11, 9],
                    mode: 'markers',
                    type: 'scatter'
                },
            ]}
            layout={ {width: 640, height: 480, title: 'Basic Bar Chart',xaxis: {title: 'Country'}, yaxis: {title: 'Medals'} } }
            style={{flex: '1 1 0%'}}
          />
        </Box>
        </div>
    : null}
    </div>
    )
}

export default Descriptive