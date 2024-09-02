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
    let user = await userModel.findOne({ email: req.user.email }).populate("posts")
    res.render("profile6", {user})
 })

 app.get("/like/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({_id: req.params.id }).populate("user");

    if (post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid);
    }
    else {
       post.likes.splice(post.likes.indexOf(req.user.userid), 1 )
    }

    await post.save();
    res.redirect("/profile");
 })


 app.get("/edit/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({_id: req.params.id }).populate("user");
    res.render("edit6", {post});

})

 app.post("/post", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email })
    let {content} = req.body
    let post = await postModel.create({
    user: user._id,
    content
   })


//    app.get('/edit/:filename', function (req, res) {
//     res.render('edit', {filename: req.params.filename});
      
//    })

   user.posts.push(post._id);
   await user.save();
   res.redirect("/profile");
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