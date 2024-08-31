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

app.get("/login", (req, res) => {
    res.render("login6")
 })


app.get("/profile", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    console.log(user)
    res.render("profile6", {user})
 })
 
 app.get("/logout", (req, res) => {
    res.cookie("token", "")
    res.redirect("/login")
 })


 function isLoggedIn (req, res, next) {
    if(req.cookies.token === "") res.redirect("/login")
    else {
       let data = jwt.verify(req.cookies.token, "shhh")
       req.user = data
       next();
    }  
 }
 

app.post("/register", async (req, res) => {
    let {email, password, username, age, name} = req.body;
    let user = await userModel.findOne({email});
    if (user) return res.status(500).send("User already registered")

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
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



app.post("/login", async (req, res) => {
    let {email, password} = req.body;
    let user = await userModel.findOne({email});
    if (!user) return res.status(400).send("something went wrong")

    bcrypt.compare(password, user.password, function (err, result){
        if (result)  {
            let token = jwt.sign({email: user.email, userid: user._id}, "shhh")
            res.cookie("token", token);
            res.status(200).render("profile6", {user})
        
        }
        else res.redirect("/login")
    })
})

app.listen(PORT, () => {
console.log(`App is listening on http://localhost:${PORT}`)
})