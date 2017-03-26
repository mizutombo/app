import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav className='container'>
            <ul className='twelve columns'>
                <li className='navbar-item'><Link to='/'>home</Link></li>
                <li className='navbar-item'><Link to='/signup'>signup</Link></li>
                <li className='navbar-item'><Link to='/signin'>signin</Link></li>
                <li className='navbar-item'><Link to='/allusers'>all users</Link></li>
                <li className='navbar-item'><Link to='/user'>user</Link></li>
            </ul>
        </nav>
    );
}