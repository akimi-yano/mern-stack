const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http').createServer(app)

const io = require('socket.io')(http)
messages = [];
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

io.on('connection', (socket) => {
    socket.on('sentMessage', (data) => {
        console.log(data)
        messages.push(data.message);
        console.log(messages)
        io.emit("updatedMessage", {data:messages})
    })
})


http.listen(8000);
