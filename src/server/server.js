const express = require('express');
const http = require('http')

const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', socket => {

    console.info('web socket connected\n')

    socket.on('connect-user', (name) => {
        socket.username = name
        console.info(`[Server] :${socket.username} joined to the chat\n`)

        socket.emit('message', 'Welcome to chat\n')
        io.emit('message', `${socket.username} joined to the chat\n`)
    })

    socket.on('disconnect-user', () => {
        console.info(`[Server] :${socket.username} left from the chat\n`)
        io.emit('message', `${socket.username} left from the chat\n`)
    })

    socket.on('chat-message', (msg) => {
        console.info(`[Server] :${socket.username}: ${msg}\n`)
        io.emit('message', `you: ${msg}\n`)
    })

    socket.on('connect_error', (error) => {
        console.error('Connection error:', error.message);
    });
})



function startServer() {
    server.listen(process.env.PORT, process.env.HOST, () => {
        console.info('server running in port ' + process.env.PORT)
    })
}

module.exports = {startServer}

