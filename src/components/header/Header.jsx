import React from 'react'
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <header className='Cabecera'>
        <a href="#cualquiercosa" className='Cabecera-logo'>
            <img className='Cabecera-img' src="https://zeevector.com/wp-content/uploads/Nike-Logo-PNG-White.png" alt="logo nike" />
        </a>
        <Navbar/>
    </header>
  )
}

export default Header
