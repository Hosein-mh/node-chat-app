const path = require('path');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { generateMessage } = require('./utils/message');

const publicDir = path.join(__dirname , '../public');
const Port = process.env.Port || 5000;

var app = express();
var server = http.createServer(app);


//configs
app.use(express.static(publicDir));

//socket.io configs
const io = socketIo(server);
io.on('connection' , (socket) => {
    console.log('new user connected');
    socket.on('disconnect' , () => {
        console.log('user disconnected')
    });
    socket.emit('AdminMessage' , generateMessage('Hadi' , 'hello im send it from server'));
    socket.broadcast.emit('newMessage' , generateMessage("user2" , "new user joined"));
    socket.on('createMessage'  , (message) => {
        io.emit("newMessage" , {
            from: message.from,
            text: message.text
        })
    })
})

server.listen(Port , () => {
    console.log(`app is up on ${Port}`);
})