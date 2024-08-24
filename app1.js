const express = require("express");
const path = require("path")
const userModel = require('./models/user')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');


app.get("/", async (req, res) =>  {
   await userModel.find
    res.render("index1")
})

app.get("/read", async (req, res) =>  {
     let allusers = await userModel.find()
     res.render("read", {users: allusers});
})

app.get("/delete/:id", async (req, res) =>  {
    let users = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read");
})


app.get("/edit1/:userid", async (req, res) =>  {
    let user = await userModel.findOne({_id: req.params.userid})
    res.render("edit1", {user});
})



app.post("/create", async (req, res) =>  {
    let {name, email, image} = req.body;

   let createdUser =  await userModel.create(
        {
            name,
            email,
            image
        }
    );

    res.redirect("/read")
})

app.listen(3000)