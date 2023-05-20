const express = require('express');
const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 8080;
const sequelize = require('./utils/database.utils')
const welcomeRoute = require('./router/welcome.router.js');
const authRoute = require('./router/auth.router.js');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", welcomeRoute)
app.use("/auth", authRoute)

app.use((error, req, res, next) => {
    if (!res.headersSent) {
        res.status(500).json({
            success: false,
            errorData: error,
            errorMessage: error.message,
        });
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err.message);
    });


app.listen(PORT, () => console.log(`server run on http://localhost:${PORT}/`));
