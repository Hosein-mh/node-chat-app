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
    var li = $('<li></li>');
    li.text(`${message.from} : ${message.text}`);
    console.log(li.text)
    $('#messages').append(li)
})
socket.on('joinAnnounce' , function(user) {
    console.log(`${user.from} joined to chatroom`);
})

//jquery
$('#msg-form').on('submit' , function(e){
    e.preventDefault();
    var message = $("[name=message]").val();
    socket.emit('createMessage' , {
        from: "user",
        text: message
    })
})