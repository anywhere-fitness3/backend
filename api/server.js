const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authenticate = require('../auth/restrictedMiddleware.js');
const authRouter = require('../auth/authRouter.js');

const usersRouter = require('../users/usersRouter.js');
const classesRouter = require('../classes/classesRouter.js');
const usersCourseRouter = require('../usersCourse/usersCourseRouter.js');

const server = express();

configureMiddleware(server);

server.use('/users', usersRouter);
server.use('/auth', authRouter);
server.use('/classes', classesRouter);

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.get('/', (req, res) => {
    res
    .status(200)
    .json({ api: "running"})
    .send('GoFitAnywhere Live')
})

module.exports = server;

