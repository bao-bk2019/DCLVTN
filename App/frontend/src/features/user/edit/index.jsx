import React, {useState, useFetch} from 'react'
import './style.scss';
// import avatar from '../../../components/Img/avatar.jpg'
// import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
// import {useForm} from 'react-hook-form'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Edit() {
  const [remove, setRemove] = useState(false);
  const ReturnProfilePage = () => {
    setRemove(false);
  }; 
  const SaveEdit = () => {
    setRemove(false);
    window.location.href='./profile';
  }
  return (
    <div className='myprofile'>
    <h2 className="h2-profile">My profile</h2>
    <Box component="form" sx={{ display: 'grip'}}>
      <div>
          <TextField 
          sx={{m: 3, ml:2}}
          label="First Name"
          id="first-name"
          placeholder="Enter your first name"
          // onChange={(e) => setFirstName(e.target.value)}
          defaultValue="A"
          />
          <TextField 
          sx={{m: 3, mr: 2}}
          label="Last Name"
          id="last-name"
          placeholder="Enter your last name"
          defaultValue="Nguyen Van"
          // onChange={(e) => setLastName(e.target.value)}
          />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{display:'inline-flex',width: 100, height: 100, float: 'right'}}/> 
      </div>
      <div>
      <TextField 
          sx={{m: 3, ml:2, mr: 2}}
          label="Email"
          id="email"
          fullWidth
          placeholder="Enter your email"
          defaultValue="NguyenVanA@gmail.com"
          // onChange={(e) => setEmail(e.target.value)}
          />
      </div>
      <div>
      <TextField 
          sx={{m: 3, ml:2, mr: 2}}
          label="Address"
          id="address"
          fullWidth
          placeholder="Enter the address"
          defaultValue="Ho Chi Minh City"
          // onChange={(e) => setAddress(e.target.value)}
          />
      </div>
      <TextField 
          sx={{m: 3, ml:2, mr: 2}}
          label="Phone number"
          id="phone"
          fullWidth
          placeholder="Enter the phone number"
          defaultValue="0987654321"
          // onChange={(e) => setPhone(e.target.value)}
          />
      <div>
          <TextField 
          sx={{m: 3, ml:2}}
          label="City"
          id="city"
          placeholder="Enter the city"
          // onChange={(e) => setCity(e.target.value)}
          defaultValue="Ho Chi Minh City"
          />
          <TextField 
          sx={{m: 3, mr: 2}}
          label="State"
          id="state"
          placeholder="Thu Duc District"
          // onChange={(e) => setState(e.target.value)}
          />
      </div>
    </Box>
      <Button variant="outlined" onClick={()=>setRemove(true)}>Cancel</Button>  

      <Link to="#"className='btn-edit'>
        <Button variant="contained" type='submit'>Save</Button>  
      </Link>

      <Dialog
        open={remove}
        onClose={ReturnProfilePage}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"CANCEL"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel your action?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ReturnProfilePage}>No</Button>
          <Button onClick={SaveEdit} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Edit