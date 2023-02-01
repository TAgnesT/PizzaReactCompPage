import React from 'react'
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
            <img src={Logo} alt="logo" />
        </div>

        <div className="navbar-right">
            <Link to="/">Kezdőoldal</Link>
            <Link to="/menu">Menü</Link>
            <Link to="/about">Rólunk</Link>
            <Link to="/contact">Kapcsolat</Link>
            <button>
                <ReorderIcon />
            </button>
        </div>

    </div>
  )
}

export default Navbar