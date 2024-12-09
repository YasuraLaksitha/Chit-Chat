require('dotenv').config()
const readline = require("node:readline");
const socket = require('socket.io-client')(`http://${process.env.HOST}:${process.env.PORT}`)

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

socket.on('message', data => {
    console.info(data)
})

cli.write('Welcome to the chat application\n')

let username

function handleUserInputs() {


    function proceed(username) {

        cli.write('Enter option:', opt => {
            switch (opt) {

                case 'connect':
                    cli.question('Enter username:', input => {
                        username = input
                    })
                    socket.emit('connect-user', username)
                    break;

                case 'chat':
                    cli.write('Chat mode\n')
                    handleChat()
                    break;

                case 'exit':
                    socket.emit('disconnect-user', username)
                    process.exit(0);
            }
        })
    }

    proceed();
}

handleUserInputs()

function handleChat() {
    cli.question('msg:', msg => {
        if (msg !== 'exit') {
            socket.emit('chat-message', username, msg)
            return handleChat()
        }
    })
}
