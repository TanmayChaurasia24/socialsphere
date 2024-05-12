import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import image from "../../pages/login/pexels-flodahm-699459.jpg"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}}>
                <span>SocialSphere</span>
            </Link>
            <HomeOutlinedIcon />
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder='Search...'/>
            </div>
            
        </div>
        <div className="right">
            <Person2OutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className="user">
                <img src={image} alt="" />
                <span>Tanmay Kumar chaaurasia</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
