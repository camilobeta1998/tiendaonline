import React from 'react'
import Cart from './navbar/Cart'
import Navbar from './navbar/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='Cabecera' id='otra-clase'>
        <Link to='/' className='Cabecera-logo'>
            <img className='Cabecera-img' src="https://zeevector.com/wp-content/uploads/Nike-Logo-PNG-White.png" alt="logo nike" />
        </Link>
        <Cart/>
        <Navbar/>
    </header>
  )
}

export default Header
