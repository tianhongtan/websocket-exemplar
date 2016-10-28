var express = require('express');
var app = express();    //new instance of express app
var server = require('http').Server(app); //instance of express wrapped in http

app.get('/', function(rec, res) {
    res.send("Hello world.");
    console.log("Something connected to express.");
});

server.listen(80);