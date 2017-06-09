// Make connection - client side
var socket = io.connect("http://127.0.0.1:8000/");

// DOM
var message = document.getElementById('message');
var user = document.getElementById('user');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');


// Emit events
btn.addEventListener('click', function(){
	socket.emit('chat', { message: message.value, user: user.value });
	message.value = "";
});

message.addEventListener('keypress', function(){    // Broadcasting 
	socket.emit('typing', user.value);
});


// Listen for events
socket.on('chat', function(data){
	feedback.innerHTML = '';
	output.innerHTML += '<p><strong>' + data.user + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){   // Listen for broadcast
	feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
