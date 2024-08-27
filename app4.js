
const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')
const cookieParser = require ('cookie-parser')
const userModel = require("./models/user4")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());



app.get('/', (req, res) => {
    res.render("index3")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({email: req.body.email})
    if(!user) res.send("Email or password is incorrect")

    bcrypt.compare(req.body.password, user.password, function (err, result){
        if(result) {
            let token = jwt.sign({email: user.email}, "samiirr");
            res.cookie("token", token)
            res.send("you are logged in login");
        }
        else res.send("something is wrong");
    })

});

app.get("/logout", function (req, res) {
    res.cookie("token", "")
    res.redirect("/")
})

app.post('/create',  async (req, res) => {
let {username, email, password, age} = req.body;
bcrypt.genSalt (10,  (err, salt) => {
    bcrypt.hash( password, salt,  async (err, hash) => {
        let createdUser =  await userModel.create({
            username,
            email,
            password: hash,
            age
        })

       let token = jwt.sign({email}, "samiirr");
       res.cookie("token", token)
       res.send(createdUser);
       
    })
})
 

});


app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});