const express = require("express");
const RegisterRouter = require("../api/register/register-router");
const LoginRouter = require("../api/login/login-router");
const LoggedInRouter = require("../api/loggedIn/loggedIn-router");
const {logger} = require("./globalMiddleware/middleware");
const cors = require("cors");


//instantiating
const server = express();
//instantiating



// global middleware
server.use(express.json()); 
server.use(cors()); 
server.use(logger);
// global middleware



//routes
server.use("/api/register",RegisterRouter);
server.use("/api/login",LoginRouter);
server.use("/api/loggedIn",LoggedInRouter);
//routes


module.exports = server; 