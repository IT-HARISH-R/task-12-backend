const express = require("express");
const userController = require("../controller/userController");
const auth = require("../middlewares/authVerify");

const authRouter = express.Router();

authRouter.post("/sing", userController.register);
authRouter.post("/login", userController.login);
authRouter.post("/Forgot-Password", userController.ForgotPassword);
authRouter.post("/reset-password/:token", userController.resetPassword);
authRouter.get("/user", userController.me)

module.exports = authRouter;  