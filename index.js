const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const server = express();

server .use(morgan('dev'));
server.use(helmet())

const port = process.env.port || 5000;
server.listen(port, () => {
    console.log('Server is up and running! ')
});