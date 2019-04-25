const express = require('express')
const server = express();

const PORT = 5000;

server.use('/', (req, res) => {
    res.send('hello')
})

server.listen(PORT, () => {console.log(`Listenint at ${PORT}`)})