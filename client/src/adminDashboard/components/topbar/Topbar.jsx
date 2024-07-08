import React from 'react'
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
// import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  const navigate = useNavigate()
  
  const handleProfile = () => {
    navigate("/users/userId")
  }

  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          {/* <div className="topbIconContainer">
            <NotificationsNone />
            <span className="topIconBadg">2</span>
          </div>
          <div className="topbIconContainer">
            <Language />
            <span className="topIconBadg">2</span>
          </div> */}
          <div className="topbIconContainer">
            <Settings onClick={handleProfile} />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
        </div>
        
    </div>
  )
}
