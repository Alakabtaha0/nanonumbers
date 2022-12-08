import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import './Navbar.css'
import Nano from '/Users/vipnumbers/nanonumbers/src/Assets/Nano Logo.jpg'

function NavBar() {

    return(
        <div className='navbar'>
            <Link to='/home' className='nav'><img src={Nano} alt='Nano Numbers Image VIP Mobile Numbers'></img></Link>
            <Link to='/browse' className='nav'>Browse Numbers</Link>
            <Link to='/create' className='nav'>Create</Link>
            <Link to='/order-sim' className='nav'>Order Sim</Link>
            <Link to='/about-us' className='nav'>About Us</Link>
            <Link to='/contact-us' className='nav'>Contact Us</Link>
            <Outlet />
        </div>
    )
}

export default NavBar