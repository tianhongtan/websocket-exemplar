var express = require('express');
var app = express();    //new instance of express app
var server = require('http').Server(app); //instance of express wrapped in http
var io = require('socket.io')(server); //invoke w/server

app.use(express.static('app'));

io.on('connection', function(socket) {
    console.log("Something ocnnected to Socket.io");
    socket.emit("messages", ["Hello", "Hi there", "How are you? "]);
});

server.listen(80);