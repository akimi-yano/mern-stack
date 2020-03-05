import React, {useState} from 'react'
import MyContext from '../context/NameContext';

const Wrapper = (props) => {
    const [name, setName] = useState("");
    
    return (
        <div>
            <MyContext.Provider value={{name, setName}}>
                {props.children}
            </MyContext.Provider>
        </div>
    )
}

export default Wrapper
