import React from 'react'
import logo from './ups-brand.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo"/>
        <div className='links'>
        <h2><a href="">Puces</a></h2>
        <h2><a href="">Tel/PC</a></h2>
        </div>
    </div>
  )
}

export default Navbar