const express = require('express');
const http = require('http')
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', socket => {

    console.info('web socket connected\n')

    socket.on('connect-user', (username) => {
        console.info(`Server :${username} joined to the chat\n`)

        socket.emit('message', 'Welcome to chat\n')
        io.emit('message', `${username} joined to the chat\n`)
    })

    socket.on('disconnect-user', (username) => {
        console.info(`Server :${username}  left from the chat\n`)
        io.emit('message', `${username} left from the chat\n`)
    })

    socket.on('chat-message', (username, msg) => {
        console.info(`Server :${username}: ${msg}\n`)
        io.emit('message', `${username} ${msg}\n`)
    })
})


function startServer() {
    server.listen(3000, '127.0.0.1', () => {
        console.info('server running in port 3000')
    })
}

module.exports = {startServer}

