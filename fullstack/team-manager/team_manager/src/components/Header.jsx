import React from 'react';
import {Link} from '@reach/router';
import NavLink from './NavLink'

const Header = (props) => {
    return (
        <div>
            <h1>Player Management</h1><NavLink to='/status/game/1'>Manage Player Status</NavLink> 
        </div>
    )
}

export default Header
