import React from 'react'
import { Link } from 'react-router-dom';

// Styles import
import '../styles/Navbar.css'
import { style } from '@mui/system';

// Image import
import Logo from '../images/atb-logo.png'
import { flexbox } from '@mui/system';

const classes = {
    logoContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        height: 150,
    },
    navbar: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D3557',
        height: 60,
    },
    link: {
        color: '#F1FAEE',
        padding: '0 15px',
        textDecoration: 'none',
        '&:hover': {
            color: "#E63946",
         },
    },
}

const Navbar = () => {
  return (
      <React.Fragment >
        <div style={classes.logoContainer} >
            <img src={Logo} alt='ATB Installations logo' />
        </div>
        <nav className='navbar' style={classes.navbar} >
            <Link to='/' style={classes.link} className='link' >
                Home
            </Link>
            <Link to='/vinyl' style={classes.link} className='link' >
                Vinyl
            </Link>
            <Link to='/carpet' style={classes.link} className='link' >
                Carpet
            </Link>
            <Link to='/laminate' style={classes.link} className='link' >
                Laminate
            </Link>
            <Link to='/tile' style={classes.link} className='link' >
                Tile
            </Link>
            <Link to='/portfolio' style={classes.link} className='link' >
                Portfolio
            </Link>
            <Link to='/contact' style={classes.link} className='link' >
                Contact Us
            </Link>
        </nav>
      </React.Fragment>
  )
}

export default Navbar