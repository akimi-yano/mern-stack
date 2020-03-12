import React, { useState, useEffect, useRef } from 'react'

const Chat = (props) => {

    const messagesEndRef = useRef(null)

    const [formState, setFormState] = useState({
        text: "",
        id: localStorage.getItem('userid'),
        roomid: props.room.roomId
    })
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        setFormState({
            ...formState,
            roomid: props.room.roomId
        })
        scrollToBottom()
    }, [props.room.roomId, props.room])
    console.log(formState)
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.sendFunction({ ...formState, text: `${localStorage.getItem('user')} said: ${formState.text}` })
        setFormState({
            ...formState,
            text: ""
        })
    }

    return (
        <div>
            <div className="container">
                {props.room ? props.room.messages.map((item, index) => (
                    item.id === formState.id ?
                        <p key={index} className="right">{item.text}</p>
                        : <p key={index} className="left">{item.text}</p>
                )) : null}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="text" value={formState.text} onChange={onChangeHandler} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat
