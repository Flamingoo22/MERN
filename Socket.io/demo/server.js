const express = require('express');

const app = express();
const PORT = 8000;

const server = app.listen(PORT, ()=>console.log(`server up on port: ${PORT}`))


const io = require('socket.io')(server, {cors:true})

// different types of socket calls
// emit = emitters = particular event
// on = triggers = listening for a particular event

//start the socket connection

io.on('connection', (socket) => {
    console.log('client connected with id:', socket.id)

    socket.on('unique string', (dataFromClient)=> {
        console.log(dataFromClient)

        io.emit('post chat', dataFromClient)
    })


})