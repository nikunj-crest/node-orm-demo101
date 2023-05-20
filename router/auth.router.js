const authRouter = require('express').Router();
const authController = require('../controller/auth.controller')

authRouter.post("/registor", authController.registor)

module.exports = authRouter