const express = require('express')
const welcomeRoute = express.Router();
const welcomeController = require('../controller/welcome.controller')

welcomeRoute.get('/welcome', welcomeController.welcome)

module.exports = welcomeRoute