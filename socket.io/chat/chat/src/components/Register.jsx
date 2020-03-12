import React, { useState, useContext } from 'react'
import { Router, navigate } from '@reach/router';
import { CTX } from './Context';
const Register = (props) => {
const {userState, setUserState} = useContext(CTX)
    // const [nameState, setNameState] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setUserState(userState)
        navigate(`/chatrooms/${userState}`)
    }

    return (
        <div>
            <h3>Get started right now!</h3>
            <p>I want to start chatting with the name ... </p>
            <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={e=>setUserState(e.target.value)} value={userState} placeholder="My name ... " />
                <button type="submit">Start Chatting</button>
            </form>
        </div>
    )
}

export default Register
