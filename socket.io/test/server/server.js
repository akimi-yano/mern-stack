const express = require('express')
const app = express()
const cors = require('cors')

const http = require('http').createServer(app);
const io = require('socket.io')(http)



app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())


require('./models/model')
require('./config/config')
require('./routes/routes')(app)

const mongoose = require('mongoose') 
const PrimaryObject = mongoose.model('PrimaryObject')


io.on('connection', (socket)=>{
    socket.on("sentMessage", (data)=>{
                PrimaryObject.find({})
                    .then(response=>io.emit("updatedMessage",{data:response}))
                    .catch(error=>console.log(error))



    })
})


http.listen(8000)