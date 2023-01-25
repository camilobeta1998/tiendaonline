import React from 'react'
import Cart from './navbar/Cart'
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <header className='Cabecera' id='otra-clase'>
        <a href="#cualquiercosa" className='Cabecera-logo'>
            <img className='Cabecera-img' src="https://zeevector.com/wp-content/uploads/Nike-Logo-PNG-White.png" alt="logo nike" />
        </a>
        <Cart/>
        <Navbar/>
    </header>
  )
}

export default Header
