import React from 'react'
//import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from '../../assets/logo.jpg'
import './navbar.css';

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' width="70" height="90"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar