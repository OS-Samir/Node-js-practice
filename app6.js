const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("samir ")
})

app.listen(3000, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})
