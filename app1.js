const express = require("express");
const path = require("path")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get("/", (req, res) =>  {
    res.render("index1")
})

app.get("/read", (req, res) =>  {
    res.render("read")
})
app.post("/create", (req, res) =>  {
    res.render("read")
})

app.listen(3000)