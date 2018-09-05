const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const publicPath = path.join(__dirname + '/../public');

app.use(express.static(publicPath))

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	})
});

server.listen(80, () => {
	console.log('Server is up on port 80')
});
