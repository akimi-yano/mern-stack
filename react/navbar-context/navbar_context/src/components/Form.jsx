import React, {useState}  from 'react'



const Form = (props) => {

    return (
        <div>
            <p>Your Name: </p><input type="text" name="name" value="props.name" onChange="handler"></input>
        </div>
    )
}

export default Form
