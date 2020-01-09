const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const configureMiddleware = require('./middleware');
const usersRouter = require('../users/usersRouter');
const classesRouter = require('../classes/classesRouter');
const authRouter = require('../auth/authRouter');
const userCourseRouter = require('../userCourse/usercourseRouter');

const server = express();

configureMiddleware(server);

server.use('/users', usersRouter);
server.use('/classes', classesRouter);
server.use('/auth', authRouter);
server.use('userCourse', userCourseRouter );

server. use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.get('/', (req, res) => {
    res.send()
})