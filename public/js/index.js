var socket = io();
socket.on('connect' , function() {
    console.log('user connected to server')
})
socket.emit('respondMail' , {
    to: 'digiMazrae@info.com' , 
    content: 'Hey i recieved your mail',
    createdAt: 2345
})
socket.on('disconnect' , function() {
    console.log('user disconnected from server!');
})
socket.on('newMessage' , function(message) {
    console.log('new message:' , message);
})
socket.on('joinAnnounce' , function(user) {
    console.log(`${user.from} joined to chatroom`);
})