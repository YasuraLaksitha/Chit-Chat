const express = require('express');
const http = require('http')
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app)
const io = new socketIO.Server(server)

io.on('connection',socket=> {

    console.info('web socket started')
})


function startServer() {
    server.listen(3000, '127.0.0.1', () => {
        console.log('server running in port 3000')
    })
}

module.exports = {startServer}

