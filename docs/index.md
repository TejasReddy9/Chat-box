---
layout: default
---

# Overview

This project is a node.js application serving a chat-room where people can be joined by their names. People who are online are shown aside. I've also deployed this node app on Heroku.

## Dependencies
*   node.js / npm
*   socket.io
*   express
*   ejs
*   nodemon

## Usage
*   Download and run `npm install`.
*   Then, run locally, `npm start`.
*   Go the localhost server with port 8000.
*   Open different sessions while running, fix usernames and start chatting.
*   In case, you wanted to add your own IP address, update `index.js` like this example:
```node
var server = app.listen(port, "192.168.56.102", function(){
	console.log('Listening to requests on port ' + port);
});
```
*   Also, in continuation of above point, please update `public/js/chat.js` also with your IP address and port number as below:
```node
var socket = io.connect("http://192.168.56.102:8000/");
```
