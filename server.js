const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const userRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")
const gamesRouter = require("./games/games-router")

const listTxns = require("./helpers/listTxns")
listTxns();
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/auth", authRouter)
server.use("/users", userRouter)
server.use("/games", gamesRouter)



server.get("/", (req,res) => {
    res.json({message: "Server is up and running"})
})

module.exports = server;