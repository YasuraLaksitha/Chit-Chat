const readline = require("node:readline");
const socket = require('socket.io-client')('http://localhost:3000')

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

    cli.question('Enter username:', input => {
        username = input
    })

    function proceed(username) {

        cli.write('Enter option:', opt => {
            switch (opt) {

                case 'connect':
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
