import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='dashboard'>Dashboard</Link>
            <Link to='blogs'>Blogs</Link>
            <Link to='about'>About us</Link>
        </div>
        </div>
    );
};

export default Header;