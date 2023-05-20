const express = require('express');
const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 8080;
const welcomeRoute = require('./router/welcome.router.js');


app.get('/', welcomeRoute)

app.listen(PORT, () => console.log(`server run on http://localhost:${PORT}/`));
