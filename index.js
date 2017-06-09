var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var port = 8000;

var server = app.listen(port, function(){
	console.log('Listening to requests on port ' + port);
});

app.use(express.static(__dirname + '/public'));

// Socket setup -  server side
var io = socket(server);

io.on('connection', function(socket) {


	console.log('Socket connection established! ', socket.id );

	socket.on('chat', function(data){
		io.sockets.emit('chat', data);
	});

	socket.on('typing', function(data){
		// console.log(data);
		socket.broadcast.emit('typing', data);
	});

});









