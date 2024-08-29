const express = require('express');
const app = express();
const PORT = 3000;
const userModel = require("./models/user6");
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');

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
    if(user) return res.status(500).send("User already registered");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
        let user = await userModel.create({
            username, 
            email, 
            age, 
            name, 
            password: hash,

        })
        console.log(user);
        })
        
    })
})


app.listen(3000, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})
