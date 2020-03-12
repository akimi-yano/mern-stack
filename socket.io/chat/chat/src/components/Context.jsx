import React, {createContext, useReducer, useState} from 'react'
import io from 'socket.io-client';
export const CTX = createContext()
const initState = {
    // general:[{from: "akimi",  msg: "hey"},{from: "aka",  msg: "konnichiwa"},{from: "haru",  msg: "yup"}],
    // pythonStack:[{from: "yuta",  msg: "test"},{from: "c",  msg: "d"},{from: "jon",  msg: "d"}],
    // mernStack:[{from: "sensei",  msg: "d"},{from: "c",  msg: "d"},{from: "c",  msg: "d"}],
    // javaStack:[{from: "carmel",  msg: "d"},{from: "c",  msg: "d"},{from: "c",  msg: "d"}],
}
const reducer = (state, action) => {
    const {from, msg, topic}=action.payload
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return{
                ...state,
                [action.payload.topic]:[...state[action.payload.topic],
                {
                    from:action.payload.from,
                    msg:action.payload.msg
                }
            ]
            }
        default: return state
    }
}
const sendChatAction = (value) => {
    socket.emit('chat message', value)
}

let socket;
const Context = (props) => {
    const [allChats, dispatch] = useReducer(reducer, initState)
    if (!socket){
        socket = io(':8000');
        socket.on('chat message', function(msg){
            dispatch({type: "RECEIVE_MESSAGE", payload: msg})
        })
    }
    console.log(props.name)
    const [userState, setUserState] = useState("")
    return (
        <div>
            <CTX.Provider  value= {{allChats, sendChatAction, userState,setUserState}}>
                {props.children}
            </CTX.Provider>           
        </div>
    )
}
export default Context
