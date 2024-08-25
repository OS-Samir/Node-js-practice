// 1) How to set getCookie
// 2) How to use bcrypt for password encryption and decryption
// 3) What is JWT and how to store data in JWT and execute it

const express = require('express')
const PORT = 3000;
const app = express()

app.get("/", function (req, res) {
    res.cookie("name", "samir") // setting up cookie
    res.send("done")
})


app.get("/read", function (req, res) {
    
    res.send("read page")
})

app.listen(PORT)
console.log(`App is listening on port http://localhost:${PORT}`)

