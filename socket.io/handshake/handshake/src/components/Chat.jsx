import React,{useState, useEffect} from 'react'
import io from 'socket.io-client'
// if it is sucessful, in terminal, it shows "nice to meet you (handshake)" and  in inspect element, it shows "simple message"

const  Chat = () => {
    const [socket]=useState(io(':8000'))
    useEffect(()=>{
    
        socket.on("message", (data) => {
            console.log(data.message)
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default  Chat
