// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const Chat = (props) => {
//     const [socket] = useState(io(':8000'))
//     const [state, setState] = useState([])
//     const [formState, setFormState] = useState({
//         message: ""
//     })

//     const onChangeHandler = (e) => {
//         setFormState({
//             ...formState,
//             [e.target.name]: e.target.value
//         })
//     }

//     const onSubmitHandler = (e) => {
//         e.preventDefault();
//         socket.emit('sentMessage', formState)
//         setFormState({
//             message: ""
//         })
//     }

//     useEffect(() => {
//         socket.on("updatedMessage", (data) => {
//             console.log(data)
//             setState(prev => [...data.data])
//         })
//     }, [])
//     return (
//         <div>
//             <p>Welcome {props.name} san \(^o^)/</p>
//             <form onSubmit={onSubmitHandler}>
//                 <input type="text" name="message" value={formState.message} onChange={onChangeHandler} />
//                 <button type="submit">Submit Message</button>
//             </form>
//             {state.map((item, index) => (
//                 <p key={index}>{item}</p>
//             ))
//             }
//         </div>
//     )
// }
// export default Chat
