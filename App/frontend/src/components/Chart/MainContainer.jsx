import React from 'react'
import { Card} from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton} from '@mui/material';
// import FormDialog from './Dialog/FormDialog';
import SingleValue from './Content/SingleValue';
import LineChart from './Content/LineChart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BarChart from './Content/BarChart';
import PieChart from './Content/PieChart';


// import AddDialog from './Dialog/AddDialog';
function MainContainer(props) {
  // const [open, setOpen] = useState(false);
  const {index, width, title, type, listOfCharts, setListOfCharts, layout, setLayout, option} = props;
  const heightTypes ={
    'value': '100px',
    'line': '400px',
    'area': '400px',
    'bar': '400px',
    'pie': '300px',
  }
  const heightLayoutTypes ={
    'value': 2,
    'line': 4,
    'area': 4,
    'bar': 4,
    'pie': 4,
  }
  const widthTypes ={
    'value': '200px',
    'line': '500px',
    'area': '500px',
    'bar' : '500px',
    'pie': '250px',
  }
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const DeleteChart = (index) => {
    // var newLayout = layout.filter((val,idx) => val.i !== String(index));
    setLayout(layout.filter((val) => val.i !== String(index)).map((item, idx) => ({...item, i:String(idx)})))
    setListOfCharts(listOfCharts.filter((val, i) => i !== index));
  }
  return (
    <>
      <Card sx={{width: widthTypes[type], height: heightTypes[type], margin:"5px",  padding:'10px', background:'white'}}>
          <CardHeader
          title={<h3 className='font-bold text-xl text-dark-blue'>{title}</h3>}
          action={
              <IconButton aria-label="settings" onClick={(e)=>handleClick(e)}>
                <MoreVertIcon />
              </IconButton>
          }
          sx={{padding:0}}
          />
          {type === 'value'? <SingleValue  column={option.label} cal={option.cal} />: null}
          {type === 'line'? <LineChart />: null}
          {type === 'bar'? <BarChart />: null}
          {type === 'pie'? <PieChart />: null}
      </Card>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>DeleteChart(index)}>Delete</MenuItem>
      </Menu>
    </>
  )
}

export default MainContainer