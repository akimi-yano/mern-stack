const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

messages=[];
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

io.on('connection', (socket) =>{
    console.log("Nice to meet you. (shake hand)")
    socket.emit('message', {message:"simple message"})

})
http.listen(8000,'0.0.0.0');