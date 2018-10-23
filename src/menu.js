import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation =()=> {
    return (
        <ul>
            <li><Link to='/home'> Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact us'>Contact us</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>

    )
}