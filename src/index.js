const {startServer} = require('./server/server')
const readline = require("node:readline");

const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

cli.write('Welcome to CHIT-CHAT message server\n\n')

const handleUserInputs = () => {

    cli.question('Type "start" to start the message server:', input => {
        if ('start'.includes(input.toLowerCase())) {
            startServer();
        }
    })
}

handleUserInputs()

