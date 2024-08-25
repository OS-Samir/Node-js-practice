// 1) How to set getCookie
// 2) How to use bcrypt for password encryption and decryption
// 3) What is JWT and how to store data in JWT and execute it
// To read we use req and to set we need res.
// Bycrpt provides encryption and decryption
// Salt is random string
// Salt is mixed with hash which generates random string that prevents password decryption
// We use SHA256 algorithm to encrypt password

const express = require('express')
const PORT = 3000;
const app = express()
const bcrypt = require('bcrypt')
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

app.get("/", function (req, res) {
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("samir123", salt, function(err, hash){  
    //         console.log(hash);
    //     })
    //     // console.log(salt);  
    // })

    bcrypt.compare("samir123", "$2b$10$da6rEumi/5HE9PUl7XoXF.NmQ9AlS1zWISpLdJTasNRH6QLOTLcxa", function (err, result) { // check if hash password and plain password are equal or not
        console.log(result)
    })
})


app.listen(PORT)
console.log(`App is listening on port http://localhost:${PORT}`)



