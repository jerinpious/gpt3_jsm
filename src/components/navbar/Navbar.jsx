import React from 'react'
import {RiMenuLine,RiCloseLine} from 'react-icons/ri';
import './navbar.css';
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links"></div>
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>      
    </div>
  )
}

export default Navbar