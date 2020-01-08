require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require('cors');
const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());

const port = process.env.port || 5000;

server.listen(port, () => {
  console.log("Server is up and running! ");
});
