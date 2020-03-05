import React, {useContext} from 'react'
import MyContext from '../context/NameContext';

const Navbar = (props) => {
    const context = useContext(MyContext);
    return (
        <div>
            <h1>Hello {context}</h1>
        </div>
    )
}

export default Navbar
