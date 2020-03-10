import React from 'react';
import {Link} from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <h1>Player Management</h1><Link to='/status/game/1'>Manage Player Status</Link> 
        </div>
    )
}

export default Header
