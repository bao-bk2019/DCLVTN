import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
function RFMAnalysis() {
  return (
    <div className='mx-32 mt-8 min-h-1000'>
    <div className='flex items-center text-deep-blue'>
      <Link to='../home' ><HomeIcon/></Link>
      <span className='font-bold px-1 font-mono'> &gt; </span>
      <Link to='../dashboard'>
        <h1 className=" font-sans text-xl font-bold ">RFM Analysis</h1>
      </Link>
      <span className='font-bold px-1 font-mono'> &gt; </span>
    </div>
    <div className='flex text-vivid-blue'>
      <AddToPhotosIcon sx={{height:"auto", width:"36px"}} />
      <h2 className=" font-sans text-3xl font-bold"> Select Data</h2>
    </div>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{paddingTop: 2}} >
            <Grid item xs={2} sm={4} md={4} key="recency">
            <div className='bg-white rounded-lg p-1 h-36'>
                <div className="font-bold pl-1">Recency Data: </div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label" >Data</InputLabel>
                        <Select
                        labelId="demo-select-small-label"
                        // id=""
                        // value={recency}
                        label="DataRecency"
                        // onChange={(e) => setRecency(e.target.value)}
                        >
                        {/* {columns.map((item) => <MenuItem value={item}>{item}</MenuItem>)} */}
                        </Select>
                        <FormHelperText>Select the name of the column containing data about recency.</FormHelperText>
                </FormControl>
                </div>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key="recency">
                <div className='bg-white rounded-lg p-1 h-36'>
                <div className="font-bold pl-1">Monetary Data: </div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Data</InputLabel>
                        <Select
                        labelId="demo-select-small-label"
                        // id=""
                        // value={recency}
                        label="DataRecency"
                        // onChange={(e) => setRecency(e.target.value)}
                        >
                        {/* {columns.map((item) => <MenuItem value={item}>{item}</MenuItem>)} */}
                        </Select>
                        <FormHelperText>Select the name of the column containing data about monetary.</FormHelperText>
                </FormControl>
                </div>
            </Grid>
            <Grid item xs={2} sm={4} md={4} key="recency">
                <div className='bg-white rounded-lg p-1 h-36'>
                <div className="font-bold pl-1">Customer Index: </div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Data</InputLabel>
                        <Select
                        labelId="demo-select-small-label"
                        // id=""
                        // value={recency}
                        label="DataRecency"
                        // onChange={(e) => setRecency(e.target.value)}
                        >
                        {/* {columns.map((item) => <MenuItem value={item}>{item}</MenuItem>)} */}
                        </Select>
                        <FormHelperText>Select the name of the column containing data about customer identity.</FormHelperText>
                </FormControl>
                </div>
            </Grid>
        </Grid>
        <Button variant='contained' sx={{marginTop: 2}} >Apply</Button>
        
  </div>
  )
}

export default RFMAnalysis