import React from "react";
import './styles.scss'
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArticleIcon from '@mui/icons-material/Article';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

function TableContent() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const changeContent = (to) => {
    window.location.href = to;
  }
  const content = {
    getstart: [
      {id: 1, name: 'First Step with Data&Retailer', to:'./get-started'}
    ],
    statistics: [{}]
  }
  return (
    <Box sx={{ width: '25%', borderRight:'1px solid', height: '100vh'}}>
      <List>
      <ListItemButton onClick={handleClick} sx={{color: '#002B9A'}} >
        <ListItemIcon>
          <ArticleIcon sx={{color: '#002B9A'}}/>
        </ListItemIcon>
        <ListItemText primary="Get Started" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {content.getstart.map(item => { return (
            <ListItemButton sx={{ pl: 9}} onClick={() => changeContent(item.to)}>
            <ListItemText primary={item.name} />
            </ListItemButton>)
          })}
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick} sx={{color: '#002B9A'}} >
        <ListItemIcon>
          <AnalyticsIcon sx={{color: '#002B9A'}} />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 9 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      </List>
    </Box>
  );
}

export default TableContent;
