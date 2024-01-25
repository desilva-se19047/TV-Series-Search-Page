import React from 'react';
import './header.css';
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import notification from "../assets/notification.png";
import contact from "../assets/contact.png"
import logo from "../assets/logo.jpg"


const HeaderNav = () => {
  return (
    <header className="header">
        <div>
            <img src= {logo} alt="Home" className="logo" />
        </div>
        <div>
            <img src= {home} alt="Home" className="header-image-1" />
            <img src= {profile} alt="Profile" className="header-image-2" />
            <img src= {notification} alt="Notification" className="header-image-3" />
            <img src= {contact} alt="Contact" className="header-image-4" />
        </div>  
    </header>
  );
};

export default HeaderNav;