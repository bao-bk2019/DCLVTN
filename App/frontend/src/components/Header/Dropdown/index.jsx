import React from 'react'
import './styles.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import avatar from '../../Img/avatar.jpg'

const AvatarDropdown = ({logoutFunction}) => {
    const avatarimg = React.forwardRef(({ children, onClick }, ref) => (
        <img
        loading="lazy"
        srcSet={avatar}
        className="img-avatar"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }
        }
        /> 
      ));
  return (
    <Dropdown>

      <Dropdown.Toggle id="dropdown-button-drop-down-centered" as={avatarimg} >
      </Dropdown.Toggle>

      <Dropdown.Menu flip={true} >
        <Dropdown.Item href="/user/profile">Setting</Dropdown.Item>
        <Dropdown.Item onClick={e => logoutFunction(e)}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default AvatarDropdown;