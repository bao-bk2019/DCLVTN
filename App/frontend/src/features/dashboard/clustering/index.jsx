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
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Plot from 'react-plotly.js';

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
                      defaultValue=""
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
      <div>
      <h2 className='cluster-heading'>K-Means</h2>
      <Box sx={{display:'flex', flexDirection: 'column'}} >
      <label className='var-item'>Number of clusters</label>
      <TextField
          id="outlined-number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{width:'30%'}}
        />
    <Box sx={{display:'flex', pt:4}}>
    <Plot
        data={[
            {
                x: [1, 2, 3, 4, 5, 6, 7],
                y: [3.8, 1.4, 0.8, 0.6, 0.44, 0.28, 0.24],
                type: 'scatter'
              },
        ]}
        layout={ {width: 640, height: 480, title: 'Elbow Method', xaxis:{title:'Number of clusters k'}, yaxis:{title:'Sum of squared distance'}} }
        style={{flex: '1 1 0%'}}
      />
    </Box>
      <br/>
      <br/>
      <br/>
      <br/>
      </Box>
      </div>
      :(show === 'hierachical')? 
      <Box>
      Hierachical Clustering
      </Box>
      :null
      }

      
  </div>
  )
}


export default Clustering