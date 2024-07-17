import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';

// import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const AvatarDropdown = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open= Boolean(anchorEl);
  // const open = Boolean(anchorEl);

  function pressProfile() {
    setAnchorEl(null);
    navigate('/user/profile');
  }
  function pressLogout(){
    setAnchorEl(null);
    navigate('/logout');
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{display:'flex', flexGrow: 0 }}>
      <Button
        onClick={handleClick}
      >
        <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<ExpandMoreIcon sx={{width:'auto', height:'12px',color: '#38bdf8', borderRadius:'9999px' ,background:'#172554'}} />}
        >
          <AccountCircleIcon sx={{width:40, height: 40}}/>
        </Badge>
      </Button> 
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{  
          style: {  
            width: 240,  
          },  
       }} 
      >
        <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}} >
          <>
          <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={<EditIcon sx={{width:'auto', height:'12px',color: '#38bdf8', borderRadius:'9999px' ,background:'#172554'}} />}
          >
            <AccountCircleIcon sx={{width:40, height: 40}}/>
          </Badge>
          </>
          <span>Truong Van A</span>
          <span>vana1234@gmail.com</span>
        </Box>
        <MenuList dense>
          <MenuItem onClick={pressProfile}>
            <ListItemIcon>
              <AccountBoxIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          {/* Add function here */}
          <MenuItem onClick={pressProfile}> 
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Setting</ListItemText>
          </MenuItem>
          <Divider/>
          <MenuItem onClick={pressLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
export default AvatarDropdown;