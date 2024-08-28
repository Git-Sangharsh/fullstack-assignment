import React from 'react';
import "./Navbar.css";
import logoSvg from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-wrapper">
            <div className='navbar-wrapper-logo'>
                <img src={logoSvg} alt="" className='logo' />
                <h4>Abstract | Help Center</h4>
            </div>
            <button className='navbar-submit-btn'>Submit a Request</button>
        </div>
    </div>
  )
}

export default Navbar