import React, {useContext}  from 'react'

import MyContext from '../context/NameContext'

const Form = () => {
    const context = useContext(MyContext);
    const onChangeHandler = (e) => {
        context.setName(e.target.value)
    }
    return (
        <div>
            <p>Your Name: </p><input type="text" name="name" onChange={onChangeHandler} />
        </div>
    )
}

export default Form
