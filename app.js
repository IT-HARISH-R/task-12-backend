const express = require("express");
const logger = require("./utlis/logger");
const authRouter = require("./routers/authRout");
const errorPage = require("./utlis/errorPage");
const cors = require("cors");
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
app.use(logger)
app.use("/auth", authRouter);

app.use(errorPage);
module.exports = app;