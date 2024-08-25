// 1) How to set getCookie
// 2) How to use bcrypt for password encryption and decryption
// 3) What is JWT and how to store data in JWT and execute it
// To read we use req and to set we need res.
// Bycrpt provides encryption and decryption
// Salt is random string
// Salt is mixed with hash which generates random string that prevents password decryption

const express = require('express')
const PORT = 3000;
const app = express()
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

// app.get("/", function (req, res) {
//     res.cookie("name", "samir") // setting up cookie
//     console.log(req.cookies)
//     res.send("done")
// })


// app.get("/read", function (req, res) {
//     res.send("read page")

// })



app.listen(PORT)
console.log(`App is listening on port http://localhost:${PORT}`)



