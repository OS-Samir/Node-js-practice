const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')

app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("welcome")
})

app.listen(PORT)

console.log(`App is listening on http://localhost:${PORT}`)