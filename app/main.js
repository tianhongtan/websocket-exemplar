
var socket = io.connect(
    'http://localhost',
    {'forceNew':true} //forces a new connection to be created.
);

socket.on("messages", function(data) {
    console.info(data);
});