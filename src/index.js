const express = require('express');

const app = express();

app.listen(3000, '127.0.0.1', () => {
    console.log('server running in port 3000')
})
