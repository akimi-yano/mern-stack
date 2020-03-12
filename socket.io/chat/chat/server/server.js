const express = require('express')
const app = express()
// const cors = require('cors')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

messages = [];

// app.use(cors())

io.on('connection', (socket)=>{
    console.log('a use connected')
    socket.on('chat message', (msg)=>{
        console.log('message: ' + JSON.stringify(msg));
        // messages.push({ from.userState, msg.message, topic.activeTopic })
        io.emit('chat message', msg)
    })
    // socket.on('all messages', (allChats)=>{
    //     messages.push(allChats)
    //     io.emit('all messages', (allChats))
    // })
    
})
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

// io.on('connection', (socket)=>{
//     socket.on('sentMessage', (data)=>{
//         messages.push(data.message);
//         io.emit('updatedMessage', {data:messages})
//     })
//     socket.on('joined', )
// })

http.listen(8000);

