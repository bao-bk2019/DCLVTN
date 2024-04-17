import {React, useState} from 'react'
import './styles.scss'
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';

const AnalysisBoard = (props) => {
    const [metric, setMetric] = useState(['example', 'example', 'example']);
    const [ordinal, setOrdinal] = useState(['example', 'example', 'example']);
    const [nominal, setNominal] = useState(['example', 'example', 'example']);
    const [show, setShow] = useState(true);

    const metricCalculate = ['Mean', 'Median', 'Mode', 'Sum', 'Std. Deviation'];
    const relativeCalculate = ['Frequency', '%'];
    if (props.type === 'Descriptive')
    return (
    <div className="classifi-value">
        <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4} key='metric'>
                <div className="var-item">Metric Variables: </div>
                <FormGroup row>
                    {metric.map((item) => <FormControlLabel control={<Checkbox  />} label={item} />)}
                </FormGroup>        
            </Grid>
            <Grid item xs={2} sm={4} md={4} key='ordinal'>
                <div className="var-item">Ordinal Variables:</div>
                <FormGroup row>
                    {ordinal.map((item) => <FormControlLabel control={<Checkbox  />} label={item} />)}
                </FormGroup> 
            </Grid>
            <Grid item xs={2} sm={4} md={4} key='nominal'>
                <div className="var-item">Nominal Variables:</div>
                <FormGroup row>
                    {nominal.map((item) => <FormControlLabel control={<Checkbox  />} label={item} />)}
                </FormGroup> 
            </Grid>
        </Grid>
        {show? <Box sx={{pt: 4}}>
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
        <Button variant="outlined" startIcon={<ContentCopyIcon />} sx={{mt: 4 }}>Copy</Button>
        </Box>: null}
        </Box>

    </div>
    )
    else if (props.type === "Cluster")
    return (
        <div>Not updated</div>
    )
    else if (props.type === "PCA")
    return (
        <div>Not updated</div>
    )
    else if (props.type === "LSTM")
    return (
        <div>Not updated</div>
    )
}

export default AnalysisBoard