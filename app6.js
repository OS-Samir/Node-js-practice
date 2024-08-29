const express = require('express');
const app = express();
const PORT = 3000;
const userModel = require("./models/user6");
const cookieParser = require('cookie-parser')
const postModel = require('./models/post6')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.get("/", (req, res) => {
   res.render("index6")
})


app.post("/register", async (req, res) => {
    let {email, password, username, name, age} = req.body;
    let user = await userModel.findOne({email});
    if (user) return res.status(500).send("User already registered")

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async(err, hash) => {
            let user = await userModel.create({
                username, 
                email,
                age,
                name, 
                password: hash
            })

            let token = jwt.sign({email: user.email, userid: user._id}, "shhh")
            res.cookie("token", token);
            res.send("User registered")
        } )
    })
})


app.listen(PORT, () => {
console.log(`App is listening on http://localhost:${PORT}`)
})