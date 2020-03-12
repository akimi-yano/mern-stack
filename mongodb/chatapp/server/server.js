const express = require('express')
const app = express()
const cors = require('cors')
const server = app.listen(8000)
const io = require('socket.io')(server)
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
let idGenerator = 0;
rooms = [
    {
        roomId:0,
        messages:[]
    },
    {
        roomId:1,
        messages:[]
    },
    {
        roomId:2,
        messages:[]
    },
    {
        roomId:3,
        messages:[]
    },
]

io.on('connection', (socket) => {
    socket.on('connected', (data) => {
        console.log(data)
        if(!data) {
            socket.emit('issuedId', {userid:idGenerator})
            idGenerator++
        }
        socket.emit('updateMessages', {data:rooms})
    })
    socket.on('joinedRoom', (data) => {
        rooms[data.roomId].messages.push({text:`${data.name} has joined the room`, id:-1})
        console.log(rooms);
        io.emit('updateMessages', {data:rooms})
    })
    socket.on('sendMessage', (data) => {
        //Poll.find()
        // .then(response => io.emit('updatedEverything', {data:response.data}))
        // .catch(error => res.json(error))
        rooms[data.roomid].messages.push({text:data.text, id:data.id});
        console.log(rooms)
        io.emit('updateMessages', {data:rooms})
    })
})

//react
// axios.put()
// .then (response => socket.emit('updatedSomething'))

