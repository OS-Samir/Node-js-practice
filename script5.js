// setting up parsers for form
// setting up ejs for esj pages
// setting up  public static files

//form handling and working with forms 
// process: 1)Initialize the project with npm (npm init -y)
// Install express

// dynamic routing
// how to get data coming from frontend at backend route


const express = require('express');
const app = express();
const path = require('path');

//These two are parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')


app.get("/", function (req, res) {
    res.render("index")
})

app.get("/profile/:username", function (req, res) { // To implement dynamic routing we have to add : before routing
    res.send(`welcome, ${req.params.username}`)
    // res.render("index")
    // res.send("chaleko cha")

})

app.listen(3000, function() {
    console.log("its running") 
})