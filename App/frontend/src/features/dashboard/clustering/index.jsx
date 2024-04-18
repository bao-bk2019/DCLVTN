import {React, useState} from 'react'
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

function Clustering() {
  const [metric, setMetric] = useState(['example', 'example', 'example']);
  const [label, setLabel] = useState(['example', 'example', 'example']);
  const [show, setShow] = useState('');

  const metricCalculate = ['Mean', 'Median', 'Mode', 'Sum', 'Std. Deviation'];
  const relativeCalculate = ['Frequency', '%'];
  const onOptionChange = e => {
    setShow(e.target.value)
  }
  return (
  <div>
    <div className="classifi-value">
      <Box sx={{w:100}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
              <div className="var-item">Metric Variables: </div>
              <FormGroup row>
                  {metric.map((item) => <FormControlLabel control={<Checkbox  />} label={item} />)}
              </FormGroup>        
          </Grid>
          <Grid item xs={6}>
              <div className="var-item">Label: </div>
              <FormGroup row>
                  {label.map((item) => <FormControlLabel control={<Checkbox  />} label={item} />)}
              </FormGroup>        
          </Grid>
        </Grid>
        <Box sx={{pt: 4}}>
          <div className="var-item">Calculate:</div>
              <Grid item xs={6}>
                  <FormGroup onChange={onOptionChange}>
                  <RadioGroup row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="kmeans"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="kmeans" control={<Radio />} label='K-Means Clustering' />
                      <FormControlLabel value="hierachical" control={<Radio />} label={'Hierachical Clustering'} />
                  </RadioGroup>
                  </FormGroup> 
              </Grid>
        </Box>
      </Box>
    </div>
      {(show === 'kmeans')? 
      <Box sx={{width:100}}>
        Kmeans 
      </Box>
      :null }

      {(show === 'hierachical')? 
      <Box>
        Hierachical Clustering
      </Box>
      :null }

      
  </div>
  )
}


export default Clustering