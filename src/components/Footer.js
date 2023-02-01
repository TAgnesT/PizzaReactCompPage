import React from 'react'
import {Facebook, LinkedIn, Instagram, Twitter} from '@mui/icons-material';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Instagram /> <Facebook /> <Twitter /> <LinkedIn />
        </div>
        <p>2022 &copy; Front-end/Webfejlesztő React Modul</p>
    </div>
  )
}

export default Footer