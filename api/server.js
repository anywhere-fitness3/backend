require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/authRouter.js");

const usersRouter = require("../users/usersRouter.js");
const classesRouter = require("../classes/classesRouter.js");
const usersCourseRouter = require("../usersCourse/usersCourseRouter.js");

const server = express();

server.use("/users", usersRouter);
server.use("/auth", authRouter);
server.use("/classes", classesRouter);
server.use("/usersCourse", usersCourseRouter);

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" })
});

module.exports = server;
