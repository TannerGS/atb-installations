import React from 'react'
import { Link } from 'react-router-dom';

// Styles import
import '../styles/Navbar.css'

const Navbar = () => {
  return (
      <React.Fragment className='main' >
        <div>
            <h1 className='logo' >
                ATB Installations
            </h1>
        </div>
        <nav className='navbar' >
            <Link to='/' className='link' >
                Home
            </Link>
            <Link to='/vinyl' className='link' >
                Vinyl
            </Link>
            <Link to='/carpet' className='link' >
                Carpet
            </Link>
            <Link to='/laminate' className='link' >
                Laminate
            </Link>
            <Link to='/tile' className='link' >
                Tile
            </Link>
            <Link to='/portfolio' className='link' >
                Portfolio
            </Link>
            <Link to='/contact' className='link' >
                Contact Us
            </Link>
        </nav>
      </React.Fragment>
  )
}

export default Navbar