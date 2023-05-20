const express = require('express')
const welcomeRoute = express.Router();

welcomeRoute.get('/', (req, res) => {
    res.send('Welcome page..')
})

module.exports = welcomeRoute