import React, {useContext} from 'react'
import MyContext from '../context/NameContext';

const Navbar = () => {
    const context = useContext(MyContext);
    return (
        <div>
            <h1>Hello {context.name}</h1>
        </div>
    )
}

export default Navbar
