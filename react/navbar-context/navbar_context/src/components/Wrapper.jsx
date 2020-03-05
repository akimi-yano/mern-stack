import React, {useState} from 'react'
import Navbar from './Navbar'
import FormWrapper from './FormWrapper'
import MyContext from '../context/NameContext';

const Wrapper = () => {
    const [name, setName] = useState(name="");
    const onChangeHandler = (e) => {
        setName({
            Name : e.target.name
        })
    
    }
    return (
        <div>
            <MyContext.Provider value={"context value"}>
            <Navbar/>
            <FormWrapper handler={onChangeHandler}/>
            </MyContext.Provider>
        </div>
    )
}

export default Wrapper
