require('dotenv').config()
const readline = require("node:readline");
const socket = require('socket.io-client')(`http://${process.env.HOST}:${process.env.PORT}`)

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

socket.on('message', data => {
    console.info(data+"\n")
})

cli.write('Welcome to the chat application\n')

let username

handleUserInputs()


function handleUserInputs() {

    function proceed() {

        cli.question('Enter an option (connect/chat/exit):', opt => {
            switch (opt) {
                case 'connect':

                    cli.question('Enter username:', input => {
                        username = input
                        socket.emit('connect-user', username)
                        setTimeout(() => proceed(), 1000)
                    })
                    break;

                case 'chat':
                    if (!username) {
                        cli.write('You must connect first\n')
                        return proceed()
                    }
                    cli.write('Chat mode on\n')
                    return handleChat()

                case 'exit':
                    socket.emit('disconnect-user', username)
                    return process.exit(0);

                default:
                    cli.write('Invalid input\n')
                    return proceed()
            }

        })
    }

    proceed();
}

function handleChat() {
    cli.question('', msg => {
        if (msg !== 'exit') {
            socket.emit('chat-message', msg)
            return handleChat()
        }
        cli.write('Chat mode of\n')
        return handleUserInputs()
    })
}
