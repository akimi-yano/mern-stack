import React from 'react'
import {Link} from '@reach/router'
import NavLink from './NavLink'
const Menu = () => {
    return (
        <div>
            <NavLink to='players/list'>List</NavLink> | <NavLink to='players/addplayer'>Add Player</NavLink>
        </div>
    )
}

export default Menu
