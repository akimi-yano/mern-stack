import React, {useState} from 'react'

const Form = (props) => {
    const [localForm, setLocalForm] = useState("")

    const onChangeHandler = (e) => {
        
        setLocalForm(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.setters.setNameState(localForm);
        localStorage.setItem('user', localForm);
        
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Get started right now!</h1>
                <p>I want to start chatting with the name...</p>
                <input type="text" name="name" onChange={onChangeHandler}/>
                <button type="submit">Start Chatting</button>
            </form>
        </div>
    )
}

export default Form
