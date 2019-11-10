const path = require('path');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { generateMessage } = require('./utils/message');

const publicDir = path.join(__dirname , '../public');
const Port = process.env.Port || 3000;

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
    socket.broadcast.emit('joinAnnounce' , generateMessage("ali" , "Hello im here"));
    socket.emit('newMessage' , {
            from: "homoh817@gmail.com",
            text: 'سلام من حسینم این اولین پیامیه که دارم واست میفرستم',
            createdAt: new Date().getTime()
    });
})

server.listen(Port , () => {
    console.log(`app is up on ${Port}`);
})