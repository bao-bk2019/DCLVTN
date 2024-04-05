import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './style.scss';
function SideBar() {
  
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  const handleClickOpen = () => {
    setLogout(true);
  };
  const ReturnMainPage = () => {
    setLogout(false);
    window.location.href = '/';
  };
  const ReturnCurrentPage = () => {
    setLogout(false);
  };

  return (
    <div className="sidebar">
        <h2 className="headertext">Settings and Privacy</h2>
        <Link className="profile-btn">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2d374ae33f61a797932855e440d65e27b687c921b83788ab7a3265872a599b?"
            className="icon-img"
          />
          <div className="title-text">Profile</div>
        </Link>
        <Link className="profile-btn">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c470d158a0be772f52a3484b0cfe5e8885325cb798430a1d8f2025ea264fb5?"
            className="icon-img"
          />
          <div className="title-text">Notification</div>
        </Link>
        <Link className="profile-btn">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bfc5ca9a044709da31b0e7798a1425064d43f2dc86b7dc1828d4fb93b5fc40e?"
            className="icon-img"
          />
          <div className="title-text">Security</div>
        </Link>
        <Link className="profile-btn">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7e4fafb83dafffbb1c0d80ec783a05f17c285c307783f214601d84b88b9cf0b?"
            className="icon-img"
          />
          <div className="title-text">Language</div>
        </Link>
        <Link className="profile-btn">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/939d1555623a5f977b8691e2eea878e5bfd6be429a989b11661896b6997bc1e0?"
            className="icon-img"
          />
          <div className="title-text">Help</div>
        </Link>
      </div>
  )
}

export default SideBar