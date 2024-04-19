import React from 'react'
import './styles.scss';
import Dropdown from 'react-bootstrap/Dropdown';
// import avatar from '../../Img/avatar.jpg'
import Avatar from '@mui/material/Avatar';
const AvatarDropdown = () => {
  const avatarimg = React.forwardRef(({ children, onClick }, ref) => (
    <Avatar
      sx={{ width: '54px', height: '54px' }}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }} />
  ));
  return (
    <Dropdown>

      <Dropdown.Toggle id="dropdown-button-drop-down-centered" as={avatarimg} >
      </Dropdown.Toggle>

      <Dropdown.Menu flip={true} >
        <Dropdown.Item href="/user/profile">Setting</Dropdown.Item>
        <Dropdown.Item href='/logout'>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default AvatarDropdown;