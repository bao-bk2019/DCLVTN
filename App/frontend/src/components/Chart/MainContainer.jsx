import React from 'react'
import { Card, CardContent } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton} from '@mui/material';
import FormDialog from './Dialog/FormDialog';
import SingleValue from './Content/SingleValue';
import LineChart from './Content/LineChart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import AddDialog from './Dialog/AddDialog';
function MainContainer(props) {
  // const [open, setOpen] = useState(false);
  const {index, width, title, type, listOfCharts, setListOfCharts, option} = props;
  const heightTypes ={
    'value': '100px',
    'line': '400px',
    'area': '400px',
  }
  const widthTypes ={
    'value': '8vw',
    'line': '20vw',
    'area': '20vw',
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
    setListOfCharts(listOfCharts.filter((val, i) => i !== index));
  }
  return (
    <>
      <Card sx={{width: `calc(${widthTypes[type]}* ${width})`, height: heightTypes[type], margin:"5px",  padding:'10px', background:'white'}}>
          <CardHeader
          title={<h3 className='font-bold text-xl'>{title}</h3>}
          action={
              <IconButton aria-label="settings" onClick={(e)=>handleClick(e)}>
                <MoreVertIcon />
              </IconButton>
          }
          sx={{padding:0}}
          />
          {type === 'value'? <SingleValue  column={option.column1} cal={option.cal} />: null}
          {type === 'line'? <LineChart />: null}
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

    {/* <FormDialog title="Edit" index={index} open={open} setOpen={setOpen} listOfCharts={listOfCharts} setListOfCharts={setListOfCharts} /> */}
    </>
  )
}

export default MainContainer