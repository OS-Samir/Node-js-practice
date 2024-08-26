const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')
const cookieParser = require('cookie-parser')


app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("index3")
})

app.listen(PORT)

console.log(`App is listening on http://localhost:${PORT}`)