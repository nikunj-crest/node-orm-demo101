const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;



app.get('/welcome', (req, res) => {
    res.send('welcome api');
})

app.listen(PORT, () => console.log(`server run on http://localhost:${PORT}/`));
